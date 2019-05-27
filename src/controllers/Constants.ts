import logger from "../util/logger";

export let OKNoError = (data?) => ({ status: 200, data });
export let ServerError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 500, err: "服务器异常", message: err ? JSON.stringify(err) : undefined };
};
export let InputError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 400, err: "输入不正确", message: err ? JSON.stringify(err) : undefined };
};
export let NoAuth = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 401, err: "权限拒绝", message: err ? JSON.stringify(err) : undefined };
};

// 用户操作错误
export let AddProjectError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1001, err: "添加项目失败", message: err ? JSON.stringify(err) : undefined };
};
export let UsernamePasswordError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1002, err: "用户名或者密码错误", message: err ? JSON.stringify(err) : undefined };
};
export let NoReceiveSmsError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1003, err: "未获取到短信，请稍候重试", message: err ? JSON.stringify(err) : undefined };
};
export let NoMorePhoneErro = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1004, err: "手机号码不足", message: err ? JSON.stringify(err) : undefined };
};
export let UserNotFoundError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1005, err: "用户不存在", message: err ? JSON.stringify(err) : undefined };
};
export let UserExistsError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1005, err: "注册的用户已经存在", message: err ? JSON.stringify(err) : undefined };
};

// 管理员操作错误
export let ProjectApiTypeExsitError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1100, err: "项目该类型的Api已经存在", message: err ? JSON.stringify(err) : undefined };
};
export let AddProjectApiError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1101, err: "添加项目Api失败", message: err ? JSON.stringify(err) : undefined };
};

// 金钱类错误
export let RechargeError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1200, err: "充值失败，必须指定UserId,充值金额必须大于0", message: err ? JSON.stringify(err) : undefined };
};
export let RechargeUserNotExistError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1201, err: "充值失败，用户不存在", message: err ? JSON.stringify(err) : undefined };
};

export let ConsumeUserNotExistError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1202, err: "消费失败，用户不存在", message: err ? JSON.stringify(err) : undefined };
};
export let ConsumeProjectNotExistError = (err?) => {
    err && logger.error(JSON.stringify(err));
    return { status: 1203, err: "消费失败，项目不存在", message: err ? JSON.stringify(err) : undefined };
};



