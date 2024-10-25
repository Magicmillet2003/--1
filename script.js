function generateTable() {
    const columnInput = document.getElementById("columnInput").value;
    const tableContainer = document.getElementById("multiplicationTable");
    tableContainer.innerHTML = ""; // 清空舊表格

    const columns = parseInt(columnInput);
    if (columns < 1 || columns > 9) {
        alert("請輸入1到9之間的數字");
        return;
    }

    const totalRows = 9; // 乘法的總行數
    const groupChunks = []; // 儲存分組後的結果

    // 設定 grid 欄數
    tableContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    // 依據輸入的columns分組
    for (let i = 1; i <= totalRows; i += columns) {
        groupChunks.push(Array.from({ length: columns }, (_, j) => i + j).filter(n => n <= totalRows));
    }

    // 按照分組結果逐列生成九九乘法表
    groupChunks.forEach(group => {
        group.forEach(num => {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("table-column");

            // 生成從 num*1 到 num*9 的結果
            for (let multiplier = 1; multiplier <= 9; multiplier++) {
                const cell = document.createElement("div");
                cell.classList.add("table-cell");
                cell.textContent = `${num} × ${multiplier} = ${num * multiplier}`;
                columnDiv.appendChild(cell);
            }

            tableContainer.appendChild(columnDiv);
        });
    });
}
