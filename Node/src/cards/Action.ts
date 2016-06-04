// 
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
// 
// Microsoft Bot Framework: http://botframework.com
// 
// Bot Builder SDK Github:
// https://github.com/Microsoft/BotBuilder
// 
// Copyright (c) Microsoft Corporation
// All rights reserved.
// 
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

import ses = require('../Session');
import msg = require('../Message');

export class Action implements IIsAction {
    private data = <IAction>{};
    
    constructor(private session?: ses.Session) {
    }
    
    public type(t: string): this {
        if (t) {
            this.data.type = t;
        }
        return this;
    }
    
    public title(text: string|string[], ...args: any[]): this {
        if (text) {
            this.data.title = msg.fmtText(this.session, text, args);
        }
        return this;
    }
    
    public value(v: string): this {
        if (v) {
            this.data.value = v;
        }
        return this;
    }
    
    public image(url: string): this {
        if (url) {
            this.data.image = url;
        }
        return this;
    }
    
    public toAction(): IAction {
        return this.data;
    }
    
    static openUrl(session: ses.Session, url: string, title?: string|string[]): Action {
        return new Action(session).type('openUrl').value(url).title(title);
    }
    
    static imBack(session: ses.Session, msg: string, title?: string|string[]): Action {
        return new Action(session).type('imBack').value(msg).title(title);
    }
    
    static postBack(session: ses.Session, msg: string, title?: string|string[]): Action {
        return new Action(session).type('postBack').value(msg).title(title);
    }
    
    static playAudio(session: ses.Session, url: string, title?: string|string[]): Action {
        return new Action(session).type('playAudio').value(url).title(title);
    }
    
    static playVideo(session: ses.Session, url: string, title?: string|string[]): Action {
        return new Action(session).type('playVideo').value(url).title(title);
    }
    
    static showImage(session: ses.Session, url: string, title?: string|string[]): Action {
        return new Action(session).type('showImage').value(url).title(title);
    }
    
    static downloadFile(session: ses.Session, url: string, title?: string|string[]): Action {
        return new Action(session).type('downloadFile').value(url).title(title);
    }
}