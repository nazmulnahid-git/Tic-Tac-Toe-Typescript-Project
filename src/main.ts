import './style.css'

let flag : number = 1;
let moves : number = 0;
let grid = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

function checker() : boolean {
    if (grid[1] == grid[2] && grid[2] == grid[3] && grid [1] != -1) return true;
    if (grid[4] == grid[5] && grid[5] == grid[6] && grid [4] != -1) return true;
    if (grid[7] == grid[8] && grid[8] == grid[9] && grid [7] != -1) return true;
    if (grid[1] == grid[4] && grid[4] == grid[7] && grid [1] != -1) return true;
    if (grid[2] == grid[5] && grid[5] == grid[8] && grid [2] != -1) return true;
    if (grid[3] == grid[6] && grid[6] == grid[9] && grid [3] != -1) return true;
    if (grid[1] == grid[5] && grid[5] == grid[9] && grid [1] != -1) return true;
    if (grid[3] == grid[5] && grid[5] == grid[7] && grid [3] != -1) return true;
    return false;

}
function move (e) {
    moves++;
    console.log(e.target.innerText)
    let ind = e.target.id * 1;
    if (grid[ind] != -1) return;
    if (flag) {
        e.target.innerHTML = `X`;
        grid[ind] = flag;
        flag = 0;
    }
    else {
        e.target.innerHTML = `O`;
        grid[ind] = flag;
        flag = 1;
    }
    if (checker() && flag === 0) {
        setTimeout(() => {
            alert(`X is win...!!!`);
            window.location.reload();
        }, 100);
    } else if (checker() && flag === 1) {
        setTimeout(() => {
            alert(`O is win...!!!`);
            window.location.reload();
        }, 100);
    } else if (moves == 9) {
        setTimeout(() => {
            alert(`Game Is Draw!!!`);
            window.location.reload();
        }, 100);
    }
}
let cell1 =  document.getElementById('1');
let cell2 =  document.getElementById('2');
let cell3 =  document.getElementById('3');
let cell4 =  document.getElementById('4');
let cell5 =  document.getElementById('5');
let cell6 =  document.getElementById('6');
let cell7 =  document.getElementById('7');
let cell8 =  document.getElementById('8');
let cell9 =  document.getElementById('9');

cell1?.addEventListener('click',(e)=>{move(e)});
cell2?.addEventListener('click',(e)=>{move(e)});
cell3?.addEventListener('click',(e)=>{move(e)});
cell4?.addEventListener('click',(e)=>{move(e)});
cell5?.addEventListener('click',(e)=>{move(e)});
cell6?.addEventListener('click',(e)=>{move(e)});
cell7?.addEventListener('click',(e)=>{move(e)});
cell8?.addEventListener('click',(e)=>{move(e)});
cell9?.addEventListener('click',(e)=>{move(e)});