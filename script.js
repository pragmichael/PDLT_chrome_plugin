var template_request_body = `

    <div data-v-1c326b38="" class="up-alert up-alert-success" style="border:5px solid red;">
        <div class="up-alert-icon">
            <div class="up-icon sm"></div>
        </div> 

        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdmVgZsIcLRMusnYBHKX3dfBh0gV4TIkQ92UnrqJbIVuPXWrg/formResponse" method="POST" style="width:100%;">
        <div data-test="alert-content" role="alert" class="up-alert-content break">
            <div class="d-none d-md-block">
                <p data-v-1c326b38="" class="m-0" style="width:70%; float:left;">What template did you use?
                <select id="templates" name="entry.1611533893" style="margin-left:20%; height:30px; padding-left:5px;">
                  <option value="nftprop2">NFT</option>
                  <option value="analytics1">Analysis tool1</option>
                  <option value="mmbased1">Metamask-based1</option>
                  <option value="stafforhourly1">stafforhourly1</option>
                  <option value="feprop">Front-End</option>
                  <option value="tokenprop">ERC20</option>
                  <option value="gamedevprop">gamedev</option>
                  <option value="dApp1">dApp1</option>
                  <option value="simplegame1">Simple game1</option>
                  <option value="dex1">DEX1</option>
                  <option value="hithere">Main Letter</option>
                  <option value="arbitragebot1">Arbitrage bot</option>
                  <option value="custom">Custom</option>
                </select>
                </p>
            </div>
        </div> 
        <input type="hidden" name="entry.1960784968" />
        <input type="hidden" name="entry.1461275940" />
        <input type="hidden" name="entry.1634059735" />
        <input type="hidden" name="entry.872920665" />
        <input type="hidden" name="entry.1649987421" />
        <input type="hidden" name="entry.327509077" />
        <input type="hidden" name="entry.82331117" />

        <button type="submit" id="send_template_data" style="height:30px;">REPORT PROPOSAL SENT!</button>
        </form>
    </div> 
`;

function input_template () {
	let alert_area = document.querySelector(".alerts");
	let popup = document.createElement("div");
		popup.className="up-alert-content break";
		popup.innerHTML = template_request_body;
//	console.log (alert_area);
	alert_area.appendChild(popup);

	listen_button();
}

function listen_button () { 
    var link = document.getElementById('send_template_data');
    console.log ("button retrieved")
    link.addEventListener('click', function() {
        console.log("listener shoot");

        send_template_data ();
    });
};

let payment_method;
let budget;
let connects;
let proposal_check;
let sales_person;
let proposal_id;
let date_posted;
let request_body;

function wait_proposal () {
	console.log('wait_proposal start');
	proposal_check = document.querySelector(".m-0").innerText;
	if (proposal_check.includes("submitted") != null) {
		let url = document.URL;
			proposal_id = url.substring(
				url.lastIndexOf('/') + 1,
				url.indexOf("?"), 
				);

		if (document.querySelector(".description")) {request_body = document.querySelector(".description").innerText;}

		if (document.querySelector(".up-fe-proposal-brief-info a")) {sales_person = document.querySelector(".up-fe-proposal-brief-info a").innerText;}
		if (document.querySelector("#payment-method-not-verified-trigger") == null) {
			payment_method = document.querySelector("#fe-payment-verified-text").innerText;
			payment_method = payment_method.substring(payment_method.indexOf("Payment"),payment_method.indexOf("verified")+8);
			}
			else {
				payment_method = document.querySelector("#payment-method-not-verified-trigger").innerText;
				payment_method = payment_method.substring(payment_method.indexOf("Payment"),payment_method.indexOf("verified")+8);
			};
		date_posted = document.querySelector(".list-inline.mb-10 span").innerText;
		if (document.querySelector(".m-0-bottom strong")) {
			connects = document.querySelector(".m-0-bottom strong").innerText;
		} 
		if (document.querySelector(".pull-right.m-0.d-none.d-md-block.text-right span") == null) {
			budget = "hourly";
		}
			else {
				budget = document.querySelector(".pull-right.m-0.d-none.d-md-block.text-right span").innerText;
			};

	console.log(proposal_check);
	console.log(proposal_id);
	console.log(sales_person); 
	console.log(payment_method);
	console.log(date_posted);
	console.log(connects);
	console.log(budget);
	}
	console.log('wait_proposal finish');

	input_template();

	document.getElementsByName("entry.1960784968")[0].value = proposal_id;
	document.getElementsByName("entry.1461275940")[0].value = sales_person;
	document.getElementsByName("entry.1634059735")[0].value = payment_method;
	document.getElementsByName("entry.872920665")[0].value = date_posted;
	document.getElementsByName("entry.1649987421")[0].value = connects;
	document.getElementsByName("entry.327509077")[0].value = budget;
	document.getElementsByName("entry.82331117")[0].value = request_body;
	}

setTimeout(wait_proposal, 3000);


// function send_template_data () {
// 	document.querySelector('#send_template_data').addEventListener("click", function () {
//        console.log('Send_template_data activated');
//     });
// 	var select = document.getElementById('templates');
// 	var template = select.options[select.selectedIndex].value;
	
// 	console.log(template);
// 	console.log(proposal_check);
// 	console.log(proposal_id);
// 	console.log(sales_person); 
// 	console.log(payment_method);
// 	console.log(date_posted);
// 	console.log(connects);
// 	console.log(budget);


// 	console.log("start XHR");

// 	var xhr = new XMLHttpRequest();
// 	xhr.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdmVgZsIcLRMusnYBHKX3dfBh0gV4TIkQ92UnrqJbIVuPXWrg/formResponse", true);
// 	xhr.setRequestHeader('Content-Type', 'application/json');
// 	xhr.send(JSON.stringify({
// 	    "entry.1611533893": template,
// 	}));
// 	xhr.onload = function() {
// 	  console.log("XHR loaded")
// 	  console.log(this.responseText);
// 	  var data = JSON.parse(this.responseText);
// 	  console.log(data);
// 	}
// }


//m-0

