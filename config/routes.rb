Rails.application.routes.draw do
  devise_for :users
  root 'groups#new'
#resourceとresourcesはどちらも自動で基本的に使うルーティングを設定してくれる
#users,groups,messagesコントローラに７つのアクションが自動定義=>rake routesコマンドで確認
#onlyはホワイトリスト系で、アクションを明示的にできるので可読性が上がる上がる.onlyオプションは、指定されたルーディングだけを生成するように指示。
  resources :users, only: [:index, :edit, :update, :show, :search] do
  resources :groups, only: [:new, :create, :edit, :update, :index] 
    resources :messages, only: [:index, :create]
   end
end