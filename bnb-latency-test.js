// Simple BNB Chain Latency Test for GetBlock
const axios = require('axios');

const RPC_URL = "https://go.getblock.io/<YOUR-ACCESS-TOKEN>/"; // Users will replace this

async function checkLatency() {
    const start = Date.now();
    try {
        await axios.post(RPC_URL, {
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: [],
            id: 1
        });
        const end = Date.now();
        console.log(`✅ GetBlock BNB Node Response: ${end - start}ms`);
    } catch (e) {
        console.error("❌ Connection failed. Check your API key.");
    }
}

checkLatency();
