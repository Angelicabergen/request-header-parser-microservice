function information (req, res){
    const ipInfo = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const langInfo = req.headers['accept-language'].split(',')[0];
    const softwareInfo = req.headers['user-agent'].split(') ')[0].split(' (')[1];
    return res.json({"ip address": ipInfo,"language": langInfo, "software": softwareInfo});
}

export default { information };