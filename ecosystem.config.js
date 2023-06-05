module.exports = {
    apps: [
        {
            name: 'Next App',
            script: 'npm',
            args: 'run start',
            cwd: '/projects/ci-cesi',
            interpreter: 'none',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
