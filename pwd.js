module.exports = function() {
    process.stdout.write('type in command > ')
process.stdin.on('data', (data) => {
    //const cmd = data.toString().trim();
    process.stdout.write(__dirname);
    process.stdout.write('\nprompt');
})
}