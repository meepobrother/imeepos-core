import { Component, NgModule, Injector } from '@angular/core';
import { CorePage, ICoreModule } from '../../../src/app/app';

@Component({
    selector: 'test2',
    template: `
        <a class="weui-btn weui-btn_primary" (click)="toTest()">toTest</a>
        <div class="article-content"><p>女徒弟风波后侯耀华亮相某活动，网友：造型浮夸猥琐依旧</p><p></p><p>文丨悠悠闲云</p><p></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=972999788,3236389507&amp;fm=173&amp;s=2CD619C2CE5A30DE436C5CBA03001093&amp;w=550&amp;h=826&amp;img.JPEG" data-loaded="0"></div><p>最近娱乐圈很热闹，可能是为了给新年增加气氛，大戏从17年最后一天鸣锣，到今天好像还没要要结束的迹象。不过说实话，对吃瓜群众来说，一向都是看热闹不嫌事大，有热闹可看谁不兴奋呢？只是很多事除了当事人其实没清楚，真相本身只有一个，知道真相的不说，多数就只能靠臆猜，没准很多事和网友想象的根本就不一样，娱乐圈的明星们都是为了利益，不管什么事可能都会求个利益最大化，所以有时候利益之下，就算是被骂，照样会腆着脸找骂：只要有钱赚，脸是可以不要的。</p><p></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2889286923,1266742960&amp;fm=173&amp;s=B4137096460234FCC70A1A880300F09E&amp;w=550&amp;h=826&amp;img.JPEG" data-loaded="0"></div><p>就像前阵闹出“混血女徒弟”风波的侯耀华，一把年纪，他爹和儿子的脸都让他丢尽，他属于坑爹又坑儿那种人。儿子都在网上说遇到垃圾，侯耀华的那个所谓的女徒弟照样招摇过市，侯耀华经纪人都说不是徒弟，那个女人照样在网上自称“侯耀华混血女徒弟”，而侯耀华自始至终除了让人骂也没什么反应。照样该干嘛干嘛。</p><p></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3796586835,2052043794&amp;fm=173&amp;s=3CB3219AC6C234FCE7011B880300709C&amp;w=550&amp;h=826&amp;img.JPEG" data-loaded="0"></div><p>女徒弟风波不久，侯耀华就出现在他父亲“侯宝林大师百年寿诞纪念”现场。近日更是出现在某正规的活动现场：而且造型很浮夸，特别是领带上，花哨的图案又网友就说：跟鬼画符似的，难不成是出来辟邪的？更是有网友觉得：造型浮夸，脸上总有种猥琐相。有句话说：相由心生。说真的，就侯耀华这幅模样，就像当初郭德纲被周立波嘲讽：他是咖啡，周立波是大蒜时，郭德纲回应：喷了香水,我都能闻出人渣味。侯耀华就是这样，有人就说，他就是满身的人渣味！</p><p></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3010165710,811784381&amp;fm=173&amp;s=7EF3399AC64B30FC9C9ACB8D0300B08D&amp;w=550&amp;h=367&amp;img.JPEG" data-loaded="0"></div><p>一般人眼里，对上了年纪的人会有种本能上的尊重，老年人给人的感觉是苍老带来的弱势感和善良，尊老爱幼也是国人的美德。只是如今不少的老年人给人的感觉却不是善良，是为老不尊！就像社会上曝光的不少为老不尊的负面现象时，很多人都会感慨：不是老人变坏，是坏人变老。毕竟大多数的老年人还是好的，只是少数的那些坏人是老人里面的老鼠屎。</p><p></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2660824007,342367363&amp;fm=173&amp;s=D4C7D8BA0EA3A0D814FECE850300608F&amp;w=550&amp;h=824&amp;img.JPEG" data-loaded="0"></div><p>娱乐圈也是一样，如今小鲜肉和小花们总是会遭到攻击，言外之意似乎那些老一代的演员们都是老戏骨，是德艺双馨！只可惜照样有所谓老艺人变成娱乐圈的老鼠屎，德艺双馨都成了讽刺！侯耀华也算是其中的代表，在和这个混血女徒弟闹出风波之前，侯耀华其实一直没闲着。三个整容女，网红三胞胎，一直以侯耀华外甥女的身份炒作。当时很多人也纳闷：侯耀华的外甥女到底是他哪个姐妹家的女儿的呢？</p><p></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3071461885,2036211464&amp;fm=173&amp;s=76938364C4CFF35F07E81A900300409D&amp;w=550&amp;h=611&amp;img.JPEG" data-loaded="0"></div><p>过了好几年，三张整容脸可能也是上不了台面，又或者侯耀华根本没能力炒红她们，于是在去年侯耀华女徒弟风波之前他的经纪人就在网上声明说这三个网红根本不是侯耀华的外甥女。当时其实没那么都人关心，爱是不是，跟别人也没没一毛钱的关系。</p><p></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1541261669,3821661783&amp;fm=173&amp;s=353C74330F2265225C7D40DA000080B3&amp;w=550&amp;h=179&amp;img.JPEG" data-loaded="0"></div><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3452498129,760712550&amp;fm=173&amp;s=0350E53307724D20527581DB0000C0B3&amp;w=550&amp;h=239&amp;img.JPEG" data-loaded="0"></div><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3288031466,2102357456&amp;fm=173&amp;s=75D26C3207724D2048F911DB0000C0B3&amp;w=550&amp;h=260&amp;img.JPEG" data-loaded="0"></div><p>直到他混血女徒弟风波之后，那三个外甥女才又被关注。后面更是有人扒出：侯耀华不止和一个女徒弟有亲密关系，还有另外一位女徒弟和侯耀华关系很亲密。再之后侯耀华的丑事又被扒了一遍：和侄子侄女争夺财产，为假药做广告！这把年纪，这么多的破事，有人就觉得应该没脸见人，看来很多是小瞧了侯耀华，不但出来见人，还把自己捯饬的很是花哨！</p><p></p><p></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=892077060,810527320&amp;fm=173&amp;s=E70D9747C66334B4DCB909EF0300F015&amp;w=550&amp;h=832&amp;img.JPEG" data-loaded="0"></div><p>前几天苍井空结婚了，当时很多人苍井空祝福，甚至很多人喊苍井空“苍老师”，网友对苍井空祝福是觉得苍井空从事的是她的工作，和人品无关。如今看到侯耀华，有人觉得苍井空的人品都比侯耀华强太多！有人直接嘲讽：德艺双馨的不是苍老师了，是侯老师。想想，就这么一个人，出来一次被骂一次，可惜了侯大师一世英名，都要被这个儿子连累!</p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2085015253,3898896929&amp;fm=173&amp;s=E8B72DD39CB13194E2A8148A03003011&amp;w=550&amp;h=345&amp;img.JPEG" data-loaded="0"></div><p></p></div>
    `
})
export class Test2Page extends CorePage {
    constructor(
        injector: Injector
    ) {
        super(injector, 'test');
    }

    ngOnInit() {
        // 显示loading
        // this.loading.show();
    }
    ngAfterContentInit() {
        this.log.log('调试状态打印， 非调试状态不打印');
        // 隐藏loading
        setTimeout(() => {
            this.loading.hide();
        }, 2000);
    }

    toTest() {
        this.router.navigate(['test'])
    }
}


@NgModule({
    imports: [
        ICoreModule.forChild([{
            path: '',
            component: Test2Page
        }])
    ],
    declarations: [
        Test2Page
    ],
    exports: [Test2Page],
})
export class Test2Module { }