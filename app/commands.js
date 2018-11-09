const exec = require('child_process').exec;

const folder = 'the_new_folder';
const file = 'example_file.txt'
const step_1 = 'mkdir ' + folder;
const step_2 = 'cd ' + folder;
const step_3 = 'touch ' + file;
const step_4 = 'cp ' + file + ' ' + file + '.backup';

run = (cmd) => {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (stderr) reject(stderr)

            resolve(stdout);
        });

    });
}
module.exports = {
    run,
    step_1,
    step_2,
    step_3,
    step_4

}