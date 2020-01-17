class UsersController < ApplicationController
# ⑥
  def index
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%")
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit

  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def show
  end
  
# ⑥serachメソッドでformatがhtmlかjsonかに分ける。今回はformatはjsonだからcreate.json.jbuilderへ
  def search
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%")
    respond_to do |format|
      format.html
      # format.json {render 'edit', json: @users } #json形式のデータを受け取ったら、＠usersをデータとして返す。そしてeditをrenderで表示する
      format.json: @users #上記を簡略的に書いた場合=>コントローラーで検索した内容をjsで表示できるようにする=>ビューに検索結果を表示させる場所を作る(users/edit.html.hamlへ)
    end

  private
  
  def user_params
    params.require(:user).permit(:name, :email)
  end
end
