const chan = process.browser && new BroadcastChannel("gudangkomik");

export const gkChannel = chan as BroadcastChannel;
