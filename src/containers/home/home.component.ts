import {Component, ElementRef, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
require('../../react-lib/dist/js/polyfill');

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

    constructor(public el: ElementRef, public route: ActivatedRoute) {
        // Do stuff
    }

    public ngAfterViewInit(): void {
        this.route.url.subscribe((value) => {

            let app = value[0].path;

            if (app === '123') {
                require.ensure(['../../react-lib/dist/js/build.js'], function () {
                    var module = require('../../react-lib/dist/js/build.js');
                    module(args);
                    debugger
                });


                // this.loadJavaScriptSync('../../react-lib/dist/js/build.js');
                // scriptjs('../../react-lib/dist/js/build.js', (test) => {
                //     debugger
                //     test.daniele();
                // });


            } else {
                this.el.nativeElement.querySelector('#example').innerHTML = '';
            }
        });

    }

    public loadJavaScriptSync(filePath) {
        // let req = new window.XMLHttpRequest();
        // req.open('GET', filePath, false);
        // req.send(null);
        // return eval(req.responseText);
    }

}
