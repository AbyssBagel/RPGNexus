from flask import Flask, render_template, request, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__, template_folder='.', static_folder='.', static_url_path='/')
app.secret_key = 'test'

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

class User(UserMixin):
    def __init__(self, id):
        self.id = id

@login_manager.user_loader
def load_user(user_id):
    return User(user_id)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return 'Logged out'

@app.route('/')
@login_required
def home():
    return render_template('home.html', user=current_user)

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    if username == 'admin' and password == 'admin':
        user = User(username)
        login_user(user)
        return redirect(url_for('home'))
    else:
        return 'Invalid username or password'
    
if __name__ == '__main__':
    app.run(debug=True)