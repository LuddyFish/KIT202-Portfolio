/* Demonstration playground for Tutorial 4 */

console.log("playground.js is running");


/* Activity 2: Football Trophy */

let maskedOwlsWin = `Team Masked Owls wins the trophy!`;
let quollsWin = `Team Quolls wins the trophy!`;
let draw = `It's a draw! Both teams share the trophy`;

function winner(maskedOwlsResults, quollsResults) {
    if (maskedOwlsResults > quollsResults) {
        return maskedOwlsWin;
    } else if (maskedOwlsResults < quollsResults) {
        return quollsWin;
    } else {
        return draw;
    }
}

// Activity 2, Rule 1
let maskedOwls = [72, 63, 99, 105];
let quolls = [44, 89, 92, 111];

function average(values) {
    let mean = 0;
    for (let i = 0; i < values.length; i++) {
        mean += values[i];
    }
    mean /= values.length;
    return mean;
}

function determineRule1Winner() {
    return winner(average(maskedOwls), average(quolls));
}

// Activity 2, Rule 2
let newMaskedOwls = [86, 45, 54, 73, 124];
let newQuolls = [78, 61, 56, 77, 101];

function wins(scores1, scores2) {
    let wins = 0;
    for (let i in scores1) {
        if (scores1[i] > scores2[i]) {
            wins++;
        }
    }
    return wins;
}

function determineRule2Winner() {
    let owl_wins = wins(newMaskedOwls, newQuolls);
    let quoll_wins = wins(newQuolls, newMaskedOwls);
    return winner(owl_wins, quoll_wins);
}

document.getElementById("activity2-highest-avg").innerHTML = determineRule1Winner();
document.getElementById("activity2-most-wins").innerHTML = determineRule2Winner();

/* Activity 3: Tax */


let clients = { 
    "Max": 24601,
    "Ash": 55100,
    "Bailey": 147800,
};

function calculateTax(income) {
    let taxOwed;
    if (income > 130000) {
        taxOwed = income * 0.27;
    } else if (income > 90000) {
        taxOwed = income * 0.21;
    } else if (income > 45000) {
        taxOwed = income * 0.15;
    } else {
        taxOwed = income * 0.10;
    }
    return taxOwed;
}

function clientTaxing(clientList) {
    let output = "";
    for (let name in clientList) {
        let taxed = Math.round(calculateTax(clientList[name]));
        output += `${name}'s income of $${clientList[name]} was taxed $${taxed}. Their net income is $${clientList[name] - taxed}.<br>`;
    }
    document.getElementById("activity3-taxes").innerHTML = output;
}

clientTaxing(clients);

/* Activity 4: Arbitrary HTML */

function arbitraryHTML() {
    document.getElementById("activity4-html").innerHTML = 
        `<article class="content">
        <h1 class="title">Hardest Problem in Computer Science: Centering Things</h1>
        <p><em>Translations: <a href="https://nptr.cc/posts/tonsky-blog-centering/" target="_blank">Chinese</a> <a href="https://coliss.com/articles/build-websites/operation/work/about-centering.html" target="_blank">Japanese</a> <a href="https://habr.com/ru/companies/ruvds/articles/810311/" target="_blank">Russian</a></em></p>
        <p>This is my claim: we, as a civilization, forgot how to center things.</p>
        <p>I mean, we know <em>how</em> to do it. It has never been simpler:</p>
        <pre><code>display: flex;
justify-content: center; /* Horizontal centering */
align-items: center; /* Vertical centering */</code></pre>
        <p>(don’t ask why you need to remember four words instead of just horizontal/vertical, <em>it’s still better than before</em>)</p>
        <p>Or you can use grids if you want:</p>
        <pre><code>display: grid;
justify-items: center; /* Horizontal centering */
align-items: center; /* Vertical centering */</code></pre>
        <p>(also don’t ask why <code>justify-content</code> became <code>justify-items</code>)</p>
        <p>If you feel like school today, we can deduce it from the first principles:</p>
        <figure>
<img src="formula@2x.png?t=1737982063" style="aspect-ratio: 360/230; " width="360" height="230">        </figure>
        <p>Hey, even ChatGPT knows how to center things:</p>
        <figure>
<img src="chatgpt@2x.png?t=1737982063" style="aspect-ratio: 720/720; " width="720" height="720">        </figure>
        <p>Okay, maybe not right away, but eventually it gets there.</p>
        <p>What I’m saying is: everybody knows how to center things. It’s trivial. And if you are lost, the knowledge is right there.</p>
        <p>Yet, when we look at actual applications, we see that these methods are not used. We see this:</p>
        <figure>
<img src="telegram_date@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>or this:</p>
        <figure>
<img src="google_maps_cross@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>or even this:</p>
        <figure>
<img src="feedly_beta@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>So something is clearly getting lost between know-how and applying that knowledge.</p>
        <figure>
<img src="something.png?t=1737982063" style="aspect-ratio: 1050/525; " width="1050" height="525">        </figure>
        <p>In theory, there’s no difference between theory and practice. Unfortunately, we live in practice.</p>
        <p>So what’s happening? Let’s find out.</p>
        <h1 id="fonts">Fonts</h1>
        <p>Fonts are one of the biggest offenders. You can see poorly aligned text everywhere. Let me showcase.</p>
        <p>Apple can’t do it:</p>
        <figure>
<img src="apple_buttons_big_sur@2x.png?t=1737982063" style="aspect-ratio: 720/270; " width="720" height="270">        </figure>
        <p>Microsoft can’t do it:</p>
        <figure>
<img src="windows@2x.webp?t=1737982063" style="aspect-ratio: 720/337; " width="720" height="337">        </figure>
        <p>GitHub can’t do it:</p>
        <figure>
<img src="github@2x.webp?t=1737982063" style="aspect-ratio: 720/230; " width="720" height="230">        </figure>
        <p>Valve can’t do it:</p>
        <figure>
<img src="steam@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Slack can’t do it:</p>
        <figure>
<img src="slack_button@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Telegram can’t do it:</p>
        <figure>
<img src="telegram@2x.webp?t=1737982063" style="aspect-ratio: 720/170; " width="720" height="170">        </figure>
        <p>Google Maps can’t do it:</p>
        <figure>
<img src="google_maps@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Honestly, I can provide an endless supply of poorly-aligned buttons without even having to look for them:</p>
        <figure>
<img src="buttons@2x.png?t=1737982063" style="aspect-ratio: 720/650; " width="720" height="650">        </figure>
        <p>I think you get the idea. Myriad companies big and small, native or web, and none are safe from text-centering problems.</p>
        <h1 id="line-height">Line height</h1>
        <p>If font metrics are not enough, the next problem on our way to perfect centering is line-height.</p>
        <p>Line height is... complicated. A canonical article to learn about it is Vincent De Oliveira’s <a href="https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align" target="_blank">Deep dive CSS: font metrics, line-height and vertical-align</a>.</p>
        <p>This is how it looks applied in practice. Slack:</p>
        <figure>
<img src="slack@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Notion:</p>
        <figure>
<img src="notion@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Airbnb:</p>
        <figure>
<img src="airbnb@2x.webp?t=1737982063" style="aspect-ratio: 720/75; " width="720" height="75">        </figure>
        <p>YouTube:</p>
        <figure>
<img src="youtube@2x.webp?t=1737982063" style="aspect-ratio: 720/150; " width="720" height="150">        </figure>
        <p>Aligning two things in different containers is almost impossible:</p>
        <figure>
<img src="name@2x.webp?t=1737982063" style="aspect-ratio: 720/130; " width="720" height="130">        </figure>
        <p>Although many have tried:</p>
        <figure>
<img src="american_airlines@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Not many have succeeded:</p>
        <figure>
<img src="addons@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>CSS might get in the way (different controls having different defaults which you have to undo before even starting trying to align):</p>
        <figure>
<img src="controls@2x.webp?t=1737982063" style="aspect-ratio: 720/100; " width="720" height="100">        </figure>
        <p>No easy solution here, just roll up your sleeves and delve into specifications.</p>
        <h1 id="icons">Icons</h1>
        <p>Icons are like small rectangles put in line with text. Therefore all problems caused by text AND line height apply here. Aligning icons next to text is a notoriously hard task.</p>
        <p>Atom:</p>
        <figure>
<img src="atom@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Platform formerly known as Twitter:</p>
        <figure>
<img src="twitter@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>iOS:</p>
        <figure>
<img src="ios@2x.webp?t=1737982063" style="aspect-ratio: 720/300; " width="720" height="300">        </figure>
        <p>Mozilla:</p>
        <figure>
<img src="mozilla@2x.webp?t=1737982063" style="aspect-ratio: 720/100; " width="720" height="100">        </figure>
        <p>YouTube:</p>
        <figure>
<img src="youtube_likes@2x.webp?t=1737982063" style="aspect-ratio: 720/260; " width="720" height="260">        </figure>
        <p>Sometimes icon wins over text:</p>
        <figure>
<img src="meet@2x.webp?t=1737982063" style="aspect-ratio: 720/220; " width="720" height="220">        </figure>
        <p>Sometimes text wins over icon:</p>
        <figure>
<img src="ical@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Sometimes both lose:</p>
        <figure>
<img src="name_button@2x.webp?t=1737982063" style="aspect-ratio: 720/150; " width="720" height="150">        </figure>
        <p>Some icons are just plain old HTML form controls:</p>
        <figure>
<img src="git_butler@2x.webp?t=1737982063" style="aspect-ratio: 720/300; " width="720" height="300">        </figure>
        <p>Some are stylized:</p>
        <figure>
<img src="by_bee@2x.webp?t=1737982063" style="aspect-ratio: 720/515; " width="720" height="515"><figcaption>Thanks @bee for the picture</figcaption>        </figure>
        <p>Sometimes people will get creative to achieve perfect alignment:</p>
        <figure>
<img src="github_close@2x.webp?t=1737982063" style="aspect-ratio: 720/250; " width="720" height="250">        </figure>
        <p>But overall it’s a pretty hopeless game:</p>
        <figure>
<img src="apple_id@2x.webp?t=1737982063" style="aspect-ratio: 720/250; " width="720" height="250">        </figure>
        <p>The problem is, CSS doesn’t help us either. There are 13 possible values for the <code>vertical-align</code> property, but none would align the icon in a meaningful way:</p>
        <figure>
<img src="text_align@2x.png?t=1737982063" style="aspect-ratio: 720/810; " width="720" height="810">        </figure>
        <p><code>text-align: middle</code> comes closest, but it aligns by x-height, not cap-height, which still looks unbalanced:</p>
        <figure>
<img src="middle@2x.webp?t=1737982063" style="aspect-ratio: 720/560; " width="720" height="560">        </figure>
        <p>That’s exactly why people love web programming so much. There’s always a challenge.</p>
        <h1 id="icon-fonts">Icon fonts</h1>
        <p>Aligning rectangles is relatively easy. Aligning text is hard. Icons are rectangles. So what if we put icons into a font file?</p>
        <p>Now we can’t align anything:</p>
        <figure>
<img src="icon_fonts@2x.webp?t=1737982063" style="aspect-ratio: 720/550; " width="720" height="550">        </figure>
        <p>Neither can we set icon size! In the example above, all icons were set to the same font size and line height. As you can see, all of them come out different sizes, with different paddings, and none were properly aligned.</p>
        <p>Despite many shortcomings and almost no upsides, companies rushed to add icon fonts everywhere. The result is this:</p>
        <figure>
<img src="calculators@2x.png?t=1737982063" style="aspect-ratio: 720/1288; " width="720" height="1288"><figcaption>macOS 10.14 → macOS 10.15</figcaption>        </figure>
        <p>Notice how operators are not vertically aligned anymore and are also blurry. All because of switching to icon font.</p>
        <p>Apple was so committed to icon fonts they even ruined the QuickTime record button:</p>
        <figure>
<img src="quicktime@2x.webp?t=1737982063" style="aspect-ratio: 720/260; " width="720" height="260">        </figure>
        <p>Just look at it:</p>
        <figure>
<img src="quicktime_button@2x.webp?t=1737982063" style="aspect-ratio: 720/400; " width="720" height="400">        </figure>
        <p>Yes, it actually looks like this to this day. As does the calculator.</p>
        <p>But they are far from being the only ones. One:</p>
        <figure>
<img src="icon_1@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Two:</p>
        <figure>
<img src="icon_3@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Three:</p>
        <figure>
<img src="icon_4@2x.webp?t=1737982063" style="aspect-ratio: 720/196; " width="720" height="196">        </figure>
        <p>Four:</p>
        <figure>
<img src="icon_5@2x.webp?t=1737982063" style="aspect-ratio: 720/100; " width="720" height="100">        </figure>
        <p>Five:</p>
        <figure>
<img src="icon_6@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>Six:</p>
        <figure>
<img src="icon_7@2x.webp?t=1737982063" style="aspect-ratio: 720/288; " width="720" height="288">        </figure>
        <p>Seven:</p>
        <figure>
<img src="icon_8@2x.webp?t=1737982063" style="aspect-ratio: 720/120; " width="720" height="120">        </figure>
        <p>Same as with text alignment, there’s an endless supply of poorly aligned icons.</p>
        <h1 id="skill-issue">Skill issue</h1>
        <p>Not only programmers fail to center things. Designers do it, too:</p>
        <figure>
<img src="things@2x.webp?t=1737982063" style="aspect-ratio: 720/250; " width="720" height="250"><figcaption><a href="https://culturedcode.com/things/blog/2024/02/things-for-apple-vision-pro/" target="_blank">Current version</a> / my fix</figcaption>        </figure>
        <p>The problem with icons is that sometimes you have to take their shape into account for things to look good:</p>
        <figure>
<img src="apple_logo@2x.webp?t=1737982063" style="aspect-ratio: 720/300; " width="720" height="300"><figcaption>Bad centering / good centering</figcaption>        </figure>
        <p>Triangle is notably tricky:</p>
        <figure>
<img src="triangle@2x.webp?t=1737982063" style="aspect-ratio: 720/190; " width="720" height="190">        </figure>
        <p>Sometimes it is too far to the left:</p>
        <figure>
<img src="triangle_left@2x.webp?t=1737982063" style="aspect-ratio: 720/150; " width="720" height="150">        </figure>
        <p>Sometimes it’s too far to the right:</p>
        <figure>
<img src="triangle_right@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>It can even be too high up (line-height strikes again):</p>
        <figure>
<img src="triangle_up@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <h1 id="horizontal-centering">Horizontal centering</h1>
        <p>You might think that only centering things vertically is hard. Not only! Horizontal might be hard, too:</p>
        <figure>
<img src="apple_sign_in_business@2x.webp?t=1737982063" style="aspect-ratio: 720/540; " width="720" height="540">        </figure>
        <p>I don’t think there’s a deep reason for these, except for people just being sloppy:</p>
        <figure>
<img src="twitter_horizontal@2x.webp?t=1737982063" style="aspect-ratio: 720/250; " width="720" height="250">        </figure>
        <p>Just, come on!</p>
        <figure>
<img src="android@2x.webp?t=1737982063" style="aspect-ratio: 720/230; " width="720" height="230">        </figure>
        <p>Can this be a deliberate decision?</p>
        <figure>
<img src="teams@2x.png?t=1737982063" style="aspect-ratio: 720/250; " width="720" height="250">        </figure>
        <p>I don’t know. Icons can suffer from it, too:</p>
        <figure>
<img src="drive@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <p>As can text:</p>
        <figure>
<img src="steam_horizontal@2x.webp?t=1737982063" style="aspect-ratio: 720/200; " width="720" height="200">        </figure>
        <h1 id="what-can-be-done-designers">What can be done: designers</h1>
        <p>So what <em>is</em> the problem?</p>
        <p>It all starts with the font. Right now, the bounding box of a text block looks like this:</p>
        <figure>
<img src="text_bounding_box@2x.png?t=1737982063" style="aspect-ratio: 360/158; " width="360" height="158">        </figure>
        <p>The problem is, it can also look like this:</p>
        <figure>
<img src="text_bounding_box_2@2x.png?t=1737982063" style="aspect-ratio: 360/158; " width="360" height="158">        </figure>
        <p>or this:</p>
        <figure>
<img src="text_bounding_box_3@2x.png?t=1737982063" style="aspect-ratio: 360/161; " width="360" height="161">        </figure>
        <p>Now, what will happen if you try to center text by centering its bounding box?</p>
        <figure>
<img src="text_bounding_box_4.png?t=1737982063" style="aspect-ratio: 720/290; " width="720" height="290">        </figure>
        <p>The text will be off! Even though rectangles are perfectly centered.</p>
        <p>But even if font <em>can</em> have its metrics unbalanced, it doesn’t mean it does. What happens in reality?</p>
        <p>In reality, <em>most</em> of the popular fonts have metrics slightly off. Many have it <em>significantly</em> off:</p>
        <figure>
<img src="metrics@2x.png?t=1737982063" style="aspect-ratio: 720/1322; " width="720" height="1322"><figcaption>Percentages are of cap-height</figcaption>        </figure>
        <p>10% is not a small number. It’s a whole pixel in font size 13! Two, if you have 2× scaling! It’s easily noticeable.</p>
        <p>Basically, Segoe UI is the reason why Github on Windows looks like this:</p>
        <figure>
<img src="github@2x.webp?t=1737982063" style="aspect-ratio: 720/230; " width="720" height="230">        </figure>
        <p>The solution is simple: make tight bounding boxes and centering will become trivial:</p>
        <figure>
<img src="text_bounding_box_5.png?t=1737982063" style="aspect-ratio: 720/290; " width="720" height="290">        </figure>
        <p>If you use Figma, it already can do this (although it’s not the default):</p>
        <figure>
<img src="figma_vertical_trim@2x.png?t=1737982063" style="aspect-ratio: 353/561; " width="353" height="561">        </figure>
        <h1 id="what-can-be-done-font-designers">What can be done: font designers</h1>
        <p>If you are a font designer, make life easier for everybody by setting your metrics so that <code>ascender − cap-height = descender</code>:</p>
        <figure>
<img src="font_metrics_numbers@2x.png?t=1737982063" style="aspect-ratio: 720/400; " width="720" height="400">        </figure>
        <p>Or the same idea, visually:</p>
        <figure>
<img src="font_metrics@2x.png?t=1737982063" style="aspect-ratio: 720/400; " width="720" height="400">        </figure>
        <p>Important! You don’t have to <em>actually</em> extend your ascenders/descenders to these boundaries. As you can see in the picture, my ascender space, for example, is way underutilized. Just make the numbers match.</p>
        <p>For both web and native, to avoid headaches, choose a font that already follows this rule. SF Pro Text, Inter, and Martian Mono seem to do this already, so they will center perfectly with no extra effort.</p>
        <p>See <a href="https://tonsky.me/blog/font-size/">Font size is useless; let’s fix it</a> for more information.</p>
        <h1 id="what-can-be-done-web-developers">What can be done: web developers</h1>
        <p>From the developer side, it’s a bit more tricky.</p>
        <p>The first thing to understand, you need to know which font you’ll be using. Unfortunately, this doesn’t work if you plan to substitute fonts.</p>
        <p>We’ll use IBM Plex Sans, a font used on this very page. IBM Plex Sans has the following metrics:</p>
        <figure>
<img src="ibm_plex_sans@2x.png?t=1737982063" style="aspect-ratio: 720/350; " width="720" height="350">        </figure>
        <p>When you set <code>font-size</code>, what you set is UPM (this will also be equal to <code>1em</code>). However, the actual space occupied by the text block is the space between the ascender and descender.</p>
        <figure>
<img src="ibm_plex_sans_notes@2x.png?t=1737982063" style="aspect-ratio: 720/350; " width="720" height="350">        </figure>
        <p>With a few simple calculations, we get that extra <code>padding-bottom: 0.052em</code> should do the trick:</p>
        <figure>
<img src="numi@2x.webp?t=1737982063" style="aspect-ratio: 720/325; " width="720" height="325">        </figure>
        <p>Should work like this:</p>
        <figure>
<img src="ibm_plex_sans_padding@2x.png?t=1737982063" style="aspect-ratio: 720/520; " width="720" height="520">        </figure>
        <p>Or in actual CSS (select text to see default text bounding box):</p>
<p>
    <span style="display: inline-block; font-size: 147px; background: #FFF; line-height: calc(2.094em - 0.052em); padding-bottom: 0.052em; width: 100%; text-align: center;">Andy</span>
</p>        <p>You can get the required font metrics for your font from <a href="https://opentype.js.org/font-inspector.html" target="_blank">opentype.js.org/font-inspector.html</a> (ascender, descender, sCapHeight).</p>
        <p>Now that we have that sorted, aligning icons is not that hard too. You set <code>vertical-align: baseline</code> and then move them down by <code>(iconHeight - capHeight) / 2</code>:</p>
        <figure>
<img src="ibm_plex_sans_icon@2x.png?t=1737982063" style="aspect-ratio: 720/307; " width="720" height="307">        </figure>
        <p>This, unfortunately, requires you to know both font metrics and icon size. But hey, at least it works:</p>
<p>
    <span style="display: inline-block; font-size: 147px; background: #FFF; line-height: calc(2.094em - 0.052em); padding-bottom: 0.052em; width: 100%; text-align: center;">
    <span style="display: inline-block; width: 147px; height: 147px; background: #FFB4FC; position: relative; top: calc((147px - 0.698em) / 2); "></span>
    Andy
    </span>
</p>        <p>Again, select the text above to see how different the browser’s bounding box is from the correct position.</p>
        <h1 id="what-can-be-done-icons-fonts">What can be done: icons fonts</h1>
        <p>STOP.</p>
        <p>USING.</p>
        <p>FONTS.</p>
        <p>FOR.</p>
        <p>ICONS.</p>
        <p>Use normal image format. The one with dimensions, you know? Width and height?</p>
        <p>Here, I drew a diagram for you, to help you make a decision:</p>
        <figure>
<img src="diagram@2x.png?t=1737982063" style="aspect-ratio: 720/720; " width="720" height="720">        </figure>
        <p>Just look at how hard Apple tries to put the checkmark inside the rectangle, and the rectangle next to the text label:</p>
        <figure>
<img src="apple_sign_in@2x.webp?t=1737982063" style="aspect-ratio: 720/508; " width="720" height="508">        </figure>
        <p>And they still fail!</p>
        <p>Nothing is easier than aligning two rectangles. Nothing is harder than trying to align text that has an arbitrary amount of empty space around it.</p>
        <p>This is a game that can’t be won.</p>
        <h1 id="what-can-be-done-optical-compensations">What can be done: optical compensations</h1>
        <p>We, developers, can only mathematically align perfect rectangles. So for anything that requires manual compensation, please wrap it in a big enough rectangle and visually balance your icon inside:</p>
        <figure>
<img src="icons_baked@2x.png?t=1737982063" style="aspect-ratio: 720/650; " width="720" height="650">        </figure>
        <h1 id="what-can-be-done-everyone">What can be done: everyone</h1>
        <p>Please pay attention. Please care. Bad centering can ruin otherwise decent UI:</p>
        <figure>
<img src="win@2x.webp?t=1737982063" style="aspect-ratio: 720/120; " width="720" height="120">        </figure>
        <p>But a properly aligned text can make your UI sing:</p>
        <figure>
<img src="win_fix@2x.webp?t=1737982063" style="aspect-ratio: 720/120; " width="720" height="120">        </figure>
        <p>Even if it’s hard. Even if tools make it inconvenient. Even if you have to search for solutions. Together, I trust, we can find our way back to putting one rectangle inside another rectangle without messing it up.</p>
        <p>I, for one, want to live in a world of beautiful well-balanced UIs. I trust that you do, too. </p>
        <p>It’s all worth it in the end.</p>
        <h1 id="honorable-mention">Honorable mention</h1>
        <p>Our article would be incomplete without this guy:</p>
        <figure>
          <video autoplay="" muted="" loop="" preload="auto" playsinline="" controls="" width="720" height="200">
            <source src="spinner.mp4?t=1737982063" type="video/mp4">
          </video>
        </figure>
        <p>Take care!</p>
        <p class="footer"><span>April 16, 2024</span><span class="separator">·</span><span>Discuss on</span> <a href="https://news.ycombinator.com/item?id=40069599" target="_blank">HackerNews</a></p>
      </article>`;
}

arbitraryHTML();