import { Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';
import { io } from 'socket.io-client';
import jwtDecode from 'jwt-decode';
import { UsersService } from 'src/app/shared/services/users.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/Interface/user';

@Component({
  selector: 'app-chat-support',
  templateUrl: './chat-support.component.html',
  styleUrls: ['./chat-support.component.scss']
})
export class ChatSupportComponent implements OnInit{
  mensajes: any[] = [];
  mensaje: String = '';
  socket: any;
  token!: string;
  user!: User;

  constructor(private usersService: UsersService, private authService: AuthService){}

  ngOnInit(): void {
    this.token = this.authService.getToken() as string;
    this.bringUser(this.token);

    const url: string = environment.apiUrl;
    this.socket = io(url);

    // if(this.user.rol=='Admin'){
    //   this.socket.emit('join', {email: this.user.email});
    // }

    this.socket.on('mensajeRecibido', (mensaje: string) => {
      this.mensajes.push({
        mensaje,
        emisor: false
      })
    });
  }

  bringUser(token: string){
    const decodedToken: any = jwtDecode(token);
    this.usersService.getUser(decodedToken._id).subscribe((user: User) => {
      this.user = user;
    });
    //console.log(this.user.apellido)
  }

  saveMessage(event: KeyboardEvent){
    if (event.keyCode === 13) {
      this.mensaje = (<HTMLInputElement>event.target).value;
    }
  }

  sendMessage(){
    console.log(this.mensaje);
    this.socket.emit('nuevoMensaje', this.mensaje);
    this.mensajes.push({
      mensaje: this.mensaje,
      emisor: true
    })
    this.mensaje = '';
    const messagesContainer = document.querySelector('.messages-container');
    if(messagesContainer){
      messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    }
  }

  nothing(){
    return;
  }
}
