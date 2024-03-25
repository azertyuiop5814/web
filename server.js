const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

// التفاعل مع الاتصالات الواردة
io.on('connection', (socket) => {
    console.log('New user connected');

    // التفاعل عند فقدان اتصال مع مستخدم
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// قم بتشغيل الخادم على المنفذ المحدد
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});