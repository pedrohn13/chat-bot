import { AfterViewChecked, ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import questions from '../../assets/questions.json';


@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  @ViewChild('chat') private chatElement: ElementRef;

  public chatMessages: string[] = [];
  public answer1: any;
  public answer2: any;
  public finished: boolean;
  public delay: boolean;
  public disableButtons: boolean;
  public hidded: boolean;

  constructor() {
    this.showBotMessage(questions[0]);
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.chatElement.nativeElement.scrollTop = this.chatElement.nativeElement.scrollHeight;
    } catch (err) { }
  }

  response(answerObj): void {
    this.chatMessages.push(answerObj.answer);
    this.disableButtons = true;
    setTimeout(() => {
      this.delay = true;
      setTimeout(() => {
        var nextMessage = questions.find(q => q.id === answerObj.next_question);
        this.delay = false;
        this.disableButtons = false;
        this.showBotMessage(nextMessage);
       }, 4000)
    }, 1000)

  }

  showBotMessage(question) {
    this.chatMessages.push(question.question);
    if (question.answers.length > 0) {
      this.answer1 = question.answers[0];
      this.answer2 = question.answers[1];
    } else {
      this.endChat();
    }
  }

  endChat() {
    this.finished = true;
  }

  hideChat() {
    this.hidded = true;
  }

}
