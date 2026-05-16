const SUPABASE_URL = 'https://cavouyzyasnuygkuwizy.supabase.co';
const SUPABASE_KEY = 'sb_publishable_6eixKKot9VleMm2KVD4o7w_C58lRv6r';

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function registerUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('authMessage');

  msg.innerText = 'Creating account...';

  const { error } = await supabaseClient.auth.signUp({
    email,
    password
  });

  if (error) {
    msg.innerText = error.message;
    return;
  }

  msg.innerText = 'Register success. Check your email.';
}

async function loginUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('authMessage');

  msg.innerText = 'Logging in...';

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    msg.innerText = error.message;
    return;
  }

  msg.innerText = 'Login success';

  setTimeout(() => {
    window.location.href = '../dashboard/index.html';
  }, 1000);
}
