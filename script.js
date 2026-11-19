const groups=[
 {id:"R",name:"Thực tế",en:"Realistic",emoji:"🛠️",color:"#eaf4ff",ink:"#4389c7",desc:"Yêu thích máy móc, công cụ, thiên nhiên và công việc thực hành.",jobs:"Kỹ thuật, cơ khí, công nghệ, nông nghiệp, vận hành"},
 {id:"I",name:"Nghiên cứu",en:"Investigative",emoji:"🔬",color:"#eaf8f3",ink:"#299b7b",desc:"Thích quan sát, phân tích, tìm hiểu nguyên nhân và giải quyết vấn đề.",jobs:"Y dược, khoa học dữ liệu, nghiên cứu, công nghệ sinh học"},
 {id:"A",name:"Nghệ thuật",en:"Artistic",emoji:"🎨",color:"#fff0f4",ink:"#d66d91",desc:"Giàu trí tưởng tượng, thích sáng tạo và thể hiện ý tưởng cá nhân.",jobs:"Thiết kế, truyền thông, nội dung, kiến trúc, nghệ thuật"},
 {id:"S",name:"Xã hội",en:"Social",emoji:"🤝",color:"#fff5e8",ink:"#d28a39",desc:"Thích hỗ trợ, hướng dẫn, lắng nghe và làm việc cùng mọi người.",jobs:"Giáo dục, tâm lý, nhân sự, công tác xã hội, chăm sóc"},
 {id:"E",name:"Quản lý",en:"Enterprising",emoji:"🚀",color:"#f2efff",ink:"#7664d7",desc:"Thích thuyết phục, lãnh đạo, kinh doanh và tạo ảnh hưởng.",jobs:"Kinh doanh, marketing, quản trị, luật, khởi nghiệp"},
 {id:"C",name:"Nghiệp vụ",en:"Conventional",emoji:"📊",color:"#eff2f8",ink:"#697a9b",desc:"Ưa sự rõ ràng, quy trình, dữ liệu và tổ chức công việc có hệ thống.",jobs:"Kế toán, tài chính, hành chính, logistics, phân tích vận hành"}
];
const questions=[
["R","Thực hiện công việc sửa chữa, lắp ráp đồ vật bằng tay."],["R","Làm việc với máy móc, thiết bị hoặc công cụ kỹ thuật."],["R","Tham gia hoạt động ngoài trời, chăm sóc cây cối hoặc động vật."],["R","Tạo ra một sản phẩm cụ thể bằng kỹ năng thực hành."],["R","Tìm hiểu cách vận hành của thiết bị hoặc hệ thống."],
["I","Tìm hiểu nguyên nhân đằng sau một hiện tượng."],["I","Đọc tài liệu, nghiên cứu để hiểu sâu một chủ đề."],["I","Phân tích số liệu để tìm ra quy luật."],["I","Giải các câu đố hoặc vấn đề cần tư duy logic."],["I","Thử nghiệm ý tưởng để kiểm chứng giả thuyết."],
["A","Vẽ, thiết kế hoặc sáng tạo hình ảnh."],["A","Viết truyện, nội dung hoặc thể hiện suy nghĩ bằng ngôn từ."],["A","Chơi nhạc, biểu diễn hoặc làm sản phẩm nghệ thuật."],["A","Nghĩ ra cách làm mới thay vì theo khuôn mẫu."],["A","Làm việc trong môi trường linh hoạt, ít quy tắc cứng nhắc."],
["S","Giúp đỡ người khác giải quyết khó khăn."],["S","Hướng dẫn, giảng giải để người khác hiểu vấn đề."],["S","Lắng nghe và chia sẻ khi ai đó cần lời khuyên."],["S","Tham gia hoạt động tình nguyện hoặc cộng đồng."],["S","Làm việc nhóm và kết nối mọi người."],
["E","Thuyết trình để thuyết phục người khác về ý tưởng."],["E","Đứng ra tổ chức hoặc dẫn dắt một nhóm."],["E","Lập kế hoạch kinh doanh hoặc dự án mới."],["E","Đàm phán, thương lượng để đạt mục tiêu."],["E","Đặt mục tiêu thử thách và chủ động chinh phục."],
["C","Sắp xếp tài liệu, dữ liệu một cách ngăn nắp."],["C","Làm việc với bảng tính, con số và hồ sơ."],["C","Kiểm tra chi tiết để đảm bảo độ chính xác."],["C","Thực hiện công việc theo quy trình rõ ràng."],["C","Lập lịch, theo dõi tiến độ và quản lý đầu việc."]
];
const labels=["Hoàn toàn không phù hợp","Ít phù hợp","Phân vân","Khá phù hợp","Rất phù hợp"];
let index=0,answers=Array(questions.length).fill(0);
const $=id=>document.getElementById(id);
$("groupGrid").innerHTML=groups.map(g=>`<article class="group-card"><div class="group-top"><span class="group-letter" style="background:${g.color};color:${g.ink}">${g.id}</span><span class="group-emoji">${g.emoji}</span></div><h3>${g.name} · ${g.en}</h3><p>${g.desc}</p></article>`).join("");
function renderQuestion(){
 const [gid,q]=questions[index],g=groups.find(x=>x.id===gid),pct=Math.round((index+1)/questions.length*100);
 $("questionCount").textContent=`Câu ${String(index+1).padStart(2,"0")} / ${questions.length}`;
 $("progressLabel").textContent=pct+"%";$("progressBar").style.width=pct+"%";
 $("questionGroup").textContent=`NHÓM ${gid} · ${g.name.toUpperCase()}`;
 $("questionText").textContent=q;
 $("answers").innerHTML=labels.map((l,i)=>`<button class="answer ${answers[index]===i+1?"selected":""}" data-value="${i+1}"><strong>${i+1}</strong>${l}</button>`).join("");
 document.querySelectorAll(".answer").forEach(b=>b.addEventListener("click",()=>{answers[index]=Number(b.dataset.value);renderQuestion()}));
 $("backBtn").style.visibility=index===0?"hidden":"visible";
 $("nextBtn").disabled=!answers[index];
 $("nextBtn").textContent=index===questions.length-1?"Xem kết quả →":"Tiếp theo →";
}
$("startBtn").onclick=()=>{$("testIntro").classList.add("hidden");$("quiz").classList.remove("hidden");renderQuestion()};
$("backBtn").onclick=()=>{if(index>0){index--;renderQuestion()}};
$("nextBtn").onclick=()=>{if(!answers[index])return;if(index<questions.length-1){index++;renderQuestion()}else showResult()};
function showResult(){
 $("quiz").classList.add("hidden");$("result").classList.remove("hidden");
 const scores=groups.map(g=>({...g,score:questions.reduce((s,q,i)=>s+(q[0]===g.id?answers[i]:0),0)})).sort((a,b)=>b.score-a.score);
 const top=scores.slice(0,3);$("resultCode").textContent=top.map(x=>x.id).join("");
 $("resultBars").innerHTML=scores.map(g=>`<div class="result-row"><b>${g.id}</b><div class="bar-track"><div class="bar-fill" style="width:${g.score/25*100}%"></div></div><span>${g.score}/25</span></div>`).join("");
 $("resultNote").innerHTML=`<b>${top[0].name} (${top[0].id})</b> là nhóm nổi trội nhất của bạn. ${top.map(g=>`<br><br><b>${g.name}:</b> ${g.desc} Gợi ý lĩnh vực: ${g.jobs}.`).join("")}<br><br>Hãy dùng kết quả này như một gợi ý để tiếp tục tìm hiểu ngành học, trải nghiệm thực tế và trao đổi với thầy cô/người tư vấn hướng nghiệp.`;
}
function restart(){index=0;answers=Array(questions.length).fill(0);$("result").classList.add("hidden");$("testIntro").classList.remove("hidden");}
$("restartBtn").onclick=restart;$("printBtn").onclick=()=>window.print();
