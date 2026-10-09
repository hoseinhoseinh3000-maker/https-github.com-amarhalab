const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const configured = SUPABASE_URL.startsWith("https://") && !SUPABASE_URL.includes("YOUR_") && !SUPABASE_ANON_KEY.includes("YOUR_");
const sb = window.supabase && configured ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));}
function toast(title,msg){const w=document.getElementById("toastbox");if(!w)return;const e=document.createElement("div");e.className="toast";e.innerHTML="<b>"+esc(title)+"</b><span>"+esc(msg)+"</span>";w.appendChild(e);setTimeout(()=>e.remove(),4500);}
function guard(){if(!sb){toast("سرور هنوز تنظیم نشده","URL و Anon Key را در supabase-config.js وارد کن.");return false;}return true;}
function dateFa(x){return new Date(x).toLocaleString("fa-IR");}
async function getPosts(){const r=await sb.from("posts").select("*").order("created_at",{ascending:false});if(r.error)throw r.error;return r.data||[];}
async function getComments(){const r=await sb.from("comments").select("*").order("created_at",{ascending:false});if(r.error)throw r.error;return r.data||[];}
async function getLikes(){const r=await sb.from("likes").select("post_id,created_at");if(r.error)throw r.error;return r.data||[];}
async function fileUrl(path){return sb.storage.from("media").getPublicUrl(path).data.publicUrl;}