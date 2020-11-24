Unhandled Promise Rejection: ChunkLoadError: Loading chunk lang-en-json failed.
chunk file will load via http instead of https

## NOTE
1. edit webpack.mix.js(Line 9-26) to ensure https cert path correct

## TO TEST
composer install && npm install --legacy-peer-deps && npm run hot
