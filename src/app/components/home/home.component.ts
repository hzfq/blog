import {Component, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'hzfq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private themeService: NbThemeService) {

  }

  showNavigationIndicators = false;
  poetries: Poetry[] = POETRY_ITEMS;
  imgs: string[] = CAROUSEL_IMGS;
  // switch theme
  selectedTheme: string;
  currentHour: number;

  selectTheme(themeName) {
    this.themeService.changeTheme(themeName);
  }

  ngOnInit(): void {
    this.currentHour = new Date().getHours();
    if (this.currentHour >= 7 && this.currentHour <= 19) {
      this.selectedTheme = THEMES[0];
    } else {
      this.selectedTheme = THEMES[1];
    }
    this.selectTheme(this.selectedTheme);
  }
}

const THEMES = [
  'default',
  'dark',
  'cosmic',
  'corporate'
];

const CAROUSEL_IMGS = [
  '/assets/imgs/6.jpg',
  '/assets/imgs/1.jpg',
  '/assets/imgs/3.jpg',
  '/assets/imgs/4.jpg',
  '/assets/imgs/5.jpg',
];

const POETRY_ITEMS = [
  {
    title: '减字木兰花 冬至',
    content:
      '晓云舒瑞，寒影初回长日至\n' +
      '罗袜新成，更有何人继后尘\n' +
      '绮窗寒浅，尽道朝来添一线\n' +
      '秉烛须游，已减铜壶昨夜筹'
  },
  {
    title: '凤求凰 琴歌',
    content:
      '有美人兮，见之不忘\n' +
      '一日不见兮，思之如狂\n' +
      '凤飞翱翔兮，四海求凰\n' +
      '无奈佳人兮，不在东墙\n' +
      '将琴代语兮，聊写衷肠\n' +
      '何日见许兮，慰我旁徨\n' +
      '愿言配德兮，携手相将\n' +
      '不得於飞兮，使我沦亡'
  },
  {
    title: '九歌 国殇',
    content:
      '操吴戈兮被犀甲，车错毂兮短兵接\n' +
      '旌蔽日兮敌若云，矢交坠兮士争先\n' +
      '凌余阵兮躐余行，左骖殪兮右刃伤\n' +
      '霾两轮兮絷四马，援玉枹兮击鸣鼓\n' +
      '天时怼兮威灵怒，严杀尽兮弃原野\n' +
      '出不入兮往不反，平原忽兮路超远\n' +
      '带长剑兮挟秦弓，首身离兮心不惩\n' +
      '诚既勇兮又以武，终刚强兮不可凌\n' +
      '身既死兮神以灵，魂魄毅兮为鬼雄'
  },
];

interface Poetry {
  title: string;
  content: string;
}
