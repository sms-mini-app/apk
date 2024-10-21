const phones = ["113", "114", "115", "116"];
const sims = [
    {
        type: "sim1",
        need_send: 2,
        count_send: 0
    },
    {
        type: "sim2",
        need_send: 2,
        count_send: 0
    },
    {
        type: "sim3",
        need_send: 2,
        count_send: 0
    }
]

function sendSms(sim, phone) {
    console.log(`send by sim ${sim.type} success: ${phone}`);
}

let sim_index_current = 0;

for (const phone of phones) {
    if (!sims.length) {
        break;
    }
    let simIndex = -1;
    for (const sim of sims) {
        simIndex++;
        if (simIndex !== sim_index_current) {
            continue;
        }
        sendSms(sim, phone);
        sim.count_send++;
        if (sim.need_send === sim.count_send) {
            sims.splice(sim_index_current, 1);
        }
        sim_index_current++;
        if (sims.length <= sim_index_current) {
            sim_index_current = 0;
        }
        break;
    }
}