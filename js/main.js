var decimals = 1;
var name = "";
var symbol = "tokens";
var miningStatus = 'stopped';
var miningIter = 0;
var target;
var randomness;
var contractAddress
contractAddress = '0x9fc2f7bb67F01F2b06d71974EfBdf26f6A2F3336';
function startApp(){
var abi = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Workether" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getRamdomness", "outputs": [ { "name": "currentRandomness", "type": "uint256", "value": "3.8103703891173207887736990542977748221809773144285332074961292160395041455791e+76" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "blockReward", "outputs": [ { "name": "", "type": "uint256", "value": "50000000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "nonce", "type": "uint256" }, { "name": "currentRandomness", "type": "uint256" }, { "name": "currentTarget", "type": "uint256" } ], "name": "checkProofOfWork", "outputs": [ { "name": "workAccepted", "type": "bool", "value": false } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": false, "inputs": [], "name": "mint", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "1.006322438356164383561643e+24" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "coinAge", "outputs": [ { "name": "myCoinAge", "type": "uint256", "value": "3.015967315068493150684929e+24" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "ownerSetStakeStartTime", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "maxTotalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "1e+25" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "18" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "randomness", "outputs": [ { "name": "", "type": "uint256", "value": "3.8103703891173207887736990542977748221809773144285332074961292160395041455791e+76" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "nonce", "type": "uint256" } ], "name": "mine", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "version", "outputs": [ { "name": "", "type": "string", "value": "0.1.0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "blockNumber", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "chainStartTime", "outputs": [ { "name": "", "type": "uint256", "value": "1512917888" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "powLimit", "outputs": [ { "name": "", "type": "uint256", "value": "1.766847064778384329583297500742918515827483896875618958121606201292619775e+72" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "halvingInterval", "outputs": [ { "name": "", "type": "uint32", "value": "210000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "stakeStartTime", "outputs": [ { "name": "", "type": "uint256", "value": "1512917888" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x8a75ff000589d114288fa6b7ca9fe51b9fb69283" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "WTHR" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalInitialSupply", "outputs": [ { "name": "", "type": "uint256", "value": "1e+24" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "nonce", "type": "uint256" }, { "name": "currentRandomness", "type": "uint256" } ], "name": "hash", "outputs": [ { "name": "", "type": "uint256", "value": "1.8569430475105882587588266137607568536673111973893317399460219858819262702947e+76" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "lastMinedOn", "outputs": [ { "name": "", "type": "uint40", "value": "1512917888" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "annualInterest", "outputs": [ { "name": "interest", "type": "uint256", "value": "770000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "stakeMinAge", "outputs": [ { "name": "", "type": "uint256", "value": "60" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "target", "outputs": [ { "name": "", "type": "uint256", "value": "1.76682010483171717894350283372783149619681025973119641754912509768237056e+72" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "nonce", "type": "uint256" } ], "name": "checkMine", "outputs": [ { "name": "success", "type": "bool", "value": false } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "stakeMaxAge", "outputs": [ { "name": "", "type": "uint256", "value": "600" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maxMintProofOfStake", "outputs": [ { "name": "", "type": "uint256", "value": "100000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_miner", "type": "address" }, { "indexed": false, "name": "_reward", "type": "uint256" }, { "indexed": false, "name": "_seconds", "type": "uint40" } ], "name": "Mine", "type": "event" }, { "anonymous": false, "inputs": [], "name": "RewardHalved", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_address", "type": "address" }, { "indexed": false, "name": "_reward", "type": "uint256" } ], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" } ]
		  var MyContract = web3.eth.contract(abi);
		  myContractInstance = MyContract.at(contractAddress);
		  myContractInstance.allEvents([], function(error, log){
			if (!error) {
			  console.log(log);
			  if (log.event == 'Mine') {
				$("#miningevents").append('Someone at ' + log.args._miner + ' mined ' + ((log.args._reward.dividedBy((new BigNumber("10")).toPower(decimals))).toString(10)) +' ' + symbol + ', took ' + log.args._seconds.toString(10) + ' seconds <br/>')
			  } else {
				$("#miningevents").append(log.event + ': ' + JSON.stringify(log.args));
			  }
			} else {
			  console.log(error);
			}
		  });
		  myContractInstance.name(function(err, rz){
			name = rz
		  })
		  myContractInstance.symbol(function(err, rz){
			symbol = rz
		  })
		  myContractInstance.decimals(function(err, rz){
			decimals = rz
		  })
		  setInterval(function(){
			  web3.eth.getAccounts(function(error, accounts){
				  if (error) return;
				  myContractInstance.balanceOf(accounts[0], function(err, rez) { 
					rez = rez.dividedBy((new BigNumber("10")).toPower(decimals));
					$("#mybalance").text('' + rez.toString(10) + ' ' + symbol + ' (on ' + accounts[0] + ')');
				  })
			  })        
		  }, 3000);
		  setInterval(function(){
			  web3.eth.getAccounts(function(error, accounts){
				  if (error) return;
				  $("#accounts").text(accounts[0]);
			  })        
		  }, 3000);
		  setInterval(function(){      
			  myContractInstance.totalSupply(function(err, rez) {
				if (err) return;
				rez = rez.dividedBy((new BigNumber("10")).toPower(decimals));
				$("#totalsupply").text( rez.toString(10) + ' ' + symbol);
			  })
		  }, 3000);
		  
		  setInterval(function(){
			  myContractInstance.lastMinedOn(function(err, rez) {
				if (err) return;
				$("#lastminedon").text(  (new Date(rez.toString(10) * 1000)).toGMTString()   + " ("+(rez.toString(10)) + ")");
			  })
		  }, 3000);
		  setInterval(function(){
			  myContractInstance.blockReward(function(err, rez) {
				if (err) return;
				rez = rez.dividedBy((new BigNumber("10")).toPower(decimals));
				$("#blockreward").text( rez.toString(10) + ' ' + symbol);
			  })
		  }, 3000);
		  setInterval(function(){
			  myContractInstance.getRamdomness(function(err, rez){
				if (err) return;
				randomness = rez
				$("#randomness").text(rez.toString(16));
			  })
		  }, 3000);
		  setInterval(function(){
			  myContractInstance.target(function(err, rez) {
				if (err) return;
				target = rez
				var target2display = rez.toString(16);
				if (target2display.length < 64) {
				  target2display = ('0'.repeat(64-target2display.length)) + rez.toString(16)
				}
				$("#target").text(target2display)
			  })
		  }, 3000);
		  setInterval(function(){
			  myContractInstance.version(function(err, ver){
				if (err) return;
				$("#version").text(ver)
			  })
		  }, 3000);
		  setInterval(function(){
			  myContractInstance.blockNumber(function(err, num){
				if (err) return;
				$("#blocknumber").text(num.toString(10))
			  })
		  }, 3000);
		  setInterval(function(){
			  myContractInstance.name(function(err, ver){
				if (err) return;
				$("#name").text(ver)
			  })
		  }, 3000);
		  setInterval(function(){
			  $("#miningstatus").text(miningStatus)
		  }, 3000);
		  setInterval(function(){
			  $("#contractaddress").text(contractAddress)
		  }, 3000);
		  setInterval(function(){
			  myContractInstance.target(function(err, rez){
				  if (err) return;
				  web3.version.getNetwork((err, netId) => {
					switch (netId) {
					  case "1":
						$("#network").text('This is Main network.')
						break
					  case "2":
						$("#network").text('This is TestNet network.')
						/*$("body").empty().append('please switch to Main network and reload this Dapp');*/
						break
					  case "3":
						$("#network").text('This is TestNet network.')
						/*$("body").empty().append('please switch to Main network and reload this Dapp');*/
						break
					  default:
					  $("#network").text('This is TestNet network.')
					  /*$("body").empty().append('please switch to Main network and reload this Dapp');*/
					}
				  })
			  })
		  }, 3000);
		}
		function  stopMining() {
		  miningStatus = 'stopped';
		}
	function startMining() {
		miningStatus = 'mining';
		var nonce = new BigNumber(0);
		var cycle = function() {
		if (miningStatus == 'stopped') return;
			if (miningIter%500 == 0) $("#mininginfo").text('total hashes: ' + miningIter);
			miningIter++;
			if (Math.floor(Math.random()*1000 + 1) == 5000) { // re-randomizing or incrementing?
				var rand = BigNumber.random(64).toString().replace('0.', '');
				nonce = new BigNumber(rand);
			} else {
			  nonce = nonce.add(1)
			}
			var newNonce = nonce.add(randomness);
			var toHash = '0x' + newNonce.toString(16)
			if (newNonce.toString(16).length < 64) {
			  toHash = '0x' + ('0'.repeat(64-newNonce.toString(16).length)) + newNonce.toString(16)
			}
			var sha = web3.sha3( toHash, {encoding: 'hex'})
			sha = new BigNumber(sha);
			if (sha.lessThan(target)){
			  $("#nonce").text(nonce.toString(10))
				console.log('golden nonce = ', nonce.toString(10))
				myContractInstance.mine('0x'+nonce.toString(16), function(err, rez){
					console.log(err, rez)
					setTimeout(function(){cycle()}, 0)
				});
			} else {
				setTimeout(function(){cycle()}, 0)
			}
		}
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
		cycle()
	}
	function transfer(){
		var addr = $("#transferaddress").val();
		var amount = $("#transferamount").val();
		amount = amount * Math.pow(10, decimals);
		if (confirm("Are you sure you want to transfer " + amount + " satoshis to " + addr)) {
			myContractInstance.transfer(addr, amount, function(){})
		}
	}
