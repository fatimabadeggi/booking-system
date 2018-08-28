<?php 
    use Carbon\Carbon;

	$price = 0;
	$decostatus = false;

	if($deco_price_option == 'yes') {
		$price = $hallinfo->dec_price;
		$decostatus = true;
	} else {
		$price = $hallinfo->no_dec_price;
	}	
		
?>
<html>
	<head>
		<meta charset="utf-8">
		<title>Invoice</title>
		<link rel="stylesheet" href="{{ asset('css/invoice.css') }}">
		<link rel="license" href="https://www.opensource.org/licenses/mit-license/">
		<script src="script.js"></script>
	</head>
	<body>
		<header>
			<h1>Invoice</h1>
			<address>
				<p>Name: {{$user->fullname}}</p>
				<p>Address: {{$user->address}}</p>
				<p>Tel: {{$user->tel}}</p>
                <p>Email: {{$user->email}}</p>
			</address>
			<span><img src="/images/icon/LOGO TWO.PNG"/>
            </span>
		</header>
		<article>
			<h1>Recipient</h1>
			<address>
				<p>CodeLab</p>
			</address>
			<table class="meta">
				<tr>
					<th><span>Invoice #</span></th>
					<td><span>{{ rand(1000,9000) }}</span></td>
				</tr>
				<tr>
					<th><span>Date</span></th>
					<td><span>{{ Carbon::today()->format('d F Y') }}</span></td>
				</tr>
				
			</table>
			<table class="inventory">
				<thead>
					<tr>
						<th><span>Item</span></th>
						<th style="width:300px;"><span>Description</span></th>
						<th><span>Rate</span></th>
						<th><span>Hours</span></th>
						<th><span>Price</span></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><a class="cut">-</a><span>
							{{ $hallinfo->name }}
						</span></td>
						<td><span>
							Space: {{ $hallinfo->inventorytype->type }}

							<br/>
							
							<p>
								Capacity: {{ $hallinfo->size }}
							</p>

							<br/>

							<p>
								Decoration: 
									@if($decostatus) Yes
									@else NO
									@endif
							</p>

							<br/>

							<p>
								Status: {{ $booking->status }}
							</p>

							<br/>

							<p>
								Date reserved: {{ $booking->booking_date->format('l d F Y') }}
							</p>

						</span></td>
						<td><span data-prefix>&#x20A6;</span>
						<span>

							{{ $price }}
							
						</span></td>
						<td><span >
							{{ $booking->hours }}
						</span></td>

						<td><span data-prefix>&#x20A6;</span>
						<span>
							{{ $booking->price }}
						</span></td>
					</tr>
				</tbody>
			</table>
			<a class="add">+</a>
			<table class="balance">
				<tr>
					<th><span>Total</span></th>
					<td><span data-prefix>&#x20A6;</span><span>
						{{ $booking->price }}
					</span></td>
				</tr>
				<tr>
					<th><span>Amount Paid</span></th>
					<td><span data-prefix>&#x20A6;</span><span>
					{{ $booking->price }}
					</span></td>
				</tr>
				<tr>
					<th><span>Balance Due</span></th>
					<td><span data-prefix>&#x20A6;</span>
					<span>{{ number_format($booking->price) }}</span></td>
				</tr>
			</table>
		</article>
		<aside>
			<h1><span contenteditable>Additional Notes</span></h1>
			<div contenteditable>
				<ul>
					<li>A finance charge of 1.5% will be made on unpaid balances after 30 days.</li>

				</ul>
				
			</div>
		</aside>
	</body>
</html>