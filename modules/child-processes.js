const {exec, spawn} = require('child_process');

function executeThis() {
    return exec('ls -la', (err, stdout, sterr) => {
        if (err) console.log(`${err}`);
        console.log(stdout);
    });
}

function spawnProcess() {
    const spawned = (spawn('ls', ['-la']));
    console.log(spawned);
    console.log(spawned.pid);
    console.log(spawned.connected);

    // Node can listen to events on processes!!!
    spawned.stdout.on('data', (data) => {
        console.log(`Is it dead? ${spawned.killed}`);
        console.log(data);
        console.log(data.toString());
    })

    // On exit
    spawned.on('exit', (code) => {
        console.log(`Process exited with code ${code}!`);
    })
}

module.exports = {executeThis, spawnProcess};
