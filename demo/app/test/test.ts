import { Component, NgModule, Injector } from '@angular/core';
import { CorePage, ICoreModule } from '../../../src/app/app';

@Component({
    selector: 'test',
    template: `
        <a (click)="toTest2()">toTest2</a>
        <div class="article-content"><p>（原标题：筷子拿反了!！安倍夫人总发安倍怪照被指故意捉弄）</p><div class="img-container"><img class="normal" width="472px" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2385519611,3893726391&amp;fm=173&amp;s=BA18A2444E5332C41C3CC5230300F04B&amp;w=472&amp;h=492&amp;img.JPG" data-loaded="0"></div><p>日本首相安倍晋三（来源：日本《日刊现代》）</p><p>海外网消息，继在Instagram（照片墙）上面上传男性半裸照引发争议后，日本首相安倍晋三的夫人安倍昭惠又一次遭到了日本网友的“声讨”，这次的主角是安倍晋三。</p><p>据日本《日刊现代》报道，安倍夫人安倍昭惠近期在日本网络上引起了不小的争议，她于去年(2017年)在Instagram上面上传了一张男性半裸照，但（2017年）年末时突然在网络上莫名其妙地“火”了起来，不过照片已被删除。很快，安倍昭惠的一张照片又一次在网络上引发了争议，这次是安倍晋三的照片。</p><div class="img-container"><img class="normal" width="448px" data-loadfunc="0" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=406308585,2508989382&amp;fm=173&amp;s=20A060B54A9614CC802964A80300E042&amp;w=448&amp;h=636&amp;img.JPG" data-loaded="0"></div><p>日本首相安倍晋三</p><p>安倍昭惠2018年首次发照片是在1月3日。这次安倍昭惠上传了一张安倍拿着筷子插在面汤里的照片，配文是“今天的午餐是咖喱乌冬面”。但是安倍的表情和神态十分憔悴，在网上引发了热议。</p><p>日本网友纷纷忍不住吐槽，“咔擦一声就拍下了一张 眼神有气无力、素颜憔悴 的安倍，安倍昭惠真是一个 暴君 ！”、“筷子拿反了！”、“围裙好像小孩的兜兜”、“眼神好诡异”、“好像公开处刑似的”、“如果昭惠夫人精神正常的话，那也太恶作剧了”、“昭惠夫人，请不要憎恨自己的丈夫”等等。日本网友认为，这绝不会让人以为昭惠夫人是在帮助安倍提升个人形象。</p><div class="img-container"><img class="normal" width="370px" data-loadfunc="0" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1975829835,3819022482&amp;fm=173&amp;s=1E9629C8F03B5D9C3A2085330300D0C3&amp;w=370&amp;h=315&amp;img.JPG" data-loaded="0"></div><p>日本首相安倍晋三</p><p>8日，安倍昭惠又上传了一张照片，配文是“在车里读报纸”。从照片中可以看到一个双目呆滞的、露出难看假笑的安倍首相。而且，令人惊讶的是，虽然在Instagram上可以删除一些不想看到的评论，但安倍昭惠还是留下了很多批评安倍的评论。</p><p>日媒称，上传的照片几乎都是一些安倍昭惠笑容满面而安倍表情冷峻的照片。为何总是上传这种照片？感觉安倍昭惠是故意用这种照片捉弄安倍。</p><p>日本首相官邸某官员表示，“并不是故意的吧。昭惠夫人若能够上传一些更加好看的照片，既能够提升安倍首相的形象，还能够表现出夫妇两人生活的美满，所以还是应该慎重发照。”</p><p>原标题：筷子拿反了! 安倍夫人总发安倍怪照被指故意捉弄</p></div>
    `
})
export class TestPage extends CorePage {
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

    toTest2(){
        this.router.navigate(['test2'])
    }
}


@NgModule({
  imports: [
    ICoreModule.forChild([{
      path: '',
      component: TestPage
    }])
  ],
  declarations: [
    TestPage
  ],
  exports: [TestPage],
})
export class TestModule { }