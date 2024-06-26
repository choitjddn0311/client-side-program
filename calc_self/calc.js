function inum(e) {
    document.cal.num_input.value = document.cal.num_input.value+e;
}
function deln() {
    document.cal.num_input.value = " ";
}
function numRes() {
    document.cal.num_input.value = eval(document.cal.num_input.value);
}
function delNum() {
    let re = Array.document.cal.num_input.value;
    re = pop(re);

    //시발 개빡치누 왜 안되지 머리가 딸림 ㅅㄱ
    //https://gent.tistory.com/415
}