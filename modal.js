class CustomModal extends HTMLElement {
	constructor() {
		super();
		this._modalVisible = false;
		this._modal;
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
		<style>
			/* The Modal (background) */
			.modal {
				display: none; 
				position: fixed; 
				z-index: 1; 
				padding-top: 100px; 
				left: 0;
				top: 0;
				width: 100%; 
				height: 100%; 
				overflow: auto; 
				background-color: rgba(0,0,0,0.4);
			}

			/* Modal Content */
			.modal-content {
				position: relative;
				background-color: #fefefe;
				margin: auto;
				padding: 12px;
				border: 1px solid #888;
				width: 60%;
				text-align: center;
				box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
				-webkit-animation-name: animatetop;
				-webkit-animation-duration: 0.4s;
				animation-name: animatetop;
				animation-duration: 0.4s
			}

			/* Add Animation */
			@-webkit-keyframes animatetop {
				from {top:-300px; opacity:0} 
				to {top:0; opacity:1}
			}

			@keyframes animatetop {
				from {top:-300px; opacity:0}
				to {top:0; opacity:1}
			}

			/* Button */
			.open, .close, .submit {
				font-size: 16px;
				line-height: 16px;
				background-color: #53af53;
				border: 1px solid #47a347;
				border-radius: 6px;
				color: #ffffff;
				margin: 6px;
				padding: 17px 34px;
			}

			.open:hover,
			.open:focus,
			.close:hover,
			.close:focus,
			.submit:hover,
			.submit:focus {
				color: #ffffff;
				text-decoration: none;
				cursor: pointer;
				background: #4ba04c;
				border: 1px solid #3f9440;
			}

			.modal-header {
				padding: 2px 16px;
				background: #20a5fc;
				border: 1px solid #1499f0;
				border-radius: 6px;
				color: white;
			}

			.modal-body {padding: 2px 16px; margin: 20px 2px}

			.modal-results {
				height: 30px;
			}

		</style>
		<div class="modal-results"></div>
		<button class="open">Open Modal</button>
		<div class="modal">
			<div class="modal-content">
				<div class="modal-header">
					<slot name="header"><h3>Default Heading</h3></slot>
				</div>
				<div class="modal-body">
					<slot name="message">Default Text</slot>
				</div>
				<button class="submit">Yes</button><button class="close">Cancel</button>
			</div>
		</div>
		`
	}

	connectedCallback() {
		this._modal = this.shadowRoot.querySelector(".modal");
		this.shadowRoot.querySelector("button").addEventListener('click', this._showModal.bind(this));
		this.shadowRoot.querySelector(".close").addEventListener('click', this._hideModal.bind(this));
		this.shadowRoot.querySelector(".submit").addEventListener('click', this._submitModal.bind(this));
	}
	disconnectedCallback() {
		this.shadowRoot.querySelector("button").removeEventListener('click', this._showModal);
		this.shadowRoot.querySelector(".close").removeEventListener('click', this._hideModal);
	}
	_showModal() {
		this._modalVisible = true;
		this._modal.style.display = 'block';
	}
	_hideModal() {
		this._modalVisible = false;
		this._modal.style.display = 'none';
		this.shadowRoot.querySelector(".modal-results").innerHTML = 'You just click "Cancel"';
	}
	_submitModal() {
		this._modalVisible = false;
		this._modal.style.display = 'none';
		this.shadowRoot.querySelector(".modal-results").innerHTML = 'You just click "Yes"';
	}
}
customElements.define('sitemate-modal',CustomModal);