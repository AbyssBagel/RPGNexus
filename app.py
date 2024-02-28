from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__, template_folder='.', static_folder='.', static_url_path='/')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    if username == 'admin' and password == 'admin':
        return redirect(url_for('home'))
    else:
        return 'Invalid username or password'
    
if __name__ == '__main__':
    app.run(debug=True)