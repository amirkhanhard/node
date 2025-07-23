import { unlink } from 'node:fs';

try {
    await unlink('tmp/hello.txt');
    console.log('successfully deleted tmp/hello.txt');
} catch (error) {
    console.error('there was an error:', error.message);
}

try {
    unlink('tmp/hello.txt', (err) => {
        if(err) throw err;
        console.log('successfully deleted tmp/hello.txt');
    });
} catch (error) {
    console.error('there was an error:', error.message);
}

