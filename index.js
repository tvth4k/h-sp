'use strict';
var logger = require('./logger');
    async function onerr() {
        var { execSync } = require('child_process');
            const fs = require('fs-extra')
                try {
            logger('Cập Nhật Đã Lỗi Tiến Hành Xóa Package', "[ FCA - SP ]");
                execSync('npm cache clean --force', { stdio: 'ignore'})
                    await new Promise(resolve => setTimeout(resolve, 2*1000))
                        fs.removeSync('../fca-horizon-tvt');
                            // why stdio is not studio :v 
                        await new Promise(resolve => setTimeout(resolve, 2*1000))
                    execSync('npm i https://github.com/tvth4k/fcahorizon', { stdio: 'ignore'})
                logger("Đã Thành Công - Tiến Hành Restart", "[ FCA - SP ]");
            process.exit(1);
        }
        catch (e) {
            logger("Đã Bị Lỗi Hãy Nhập Vào Console Mã Sau Đây Để Fix !", "[ FCA - SP ]");
                logger("rmdir ./node_modules/fca-horizon-tvt && npm i https://github.com/tvth4k/fcahorizon && npm start", '[ FCA - SP ]');
            logger("Hãy Copy Hết Những Chữ Trên, Cần Làm Đúng 100% Nếu Ko File Bạn Sẽ Bay Màu ✨", "[ FCA - SP ]")
        process.exit(0);
        }
    }
            // <= End Submit The Error To The Api => //
module.exports = {
    onError: onerr,
    Submitform: submitform
};