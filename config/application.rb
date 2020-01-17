require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
#不要なファイルを生成しないようにする
module ChatSpace
  class Application < Rails::Application
#config.generatorsでrails gで生成されるファイルの設定
    config.generators do |g|
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.test_framework false
#デフォルトのlocaleを日本語(:ja)にする
      config.i18n.default_locale = :ja
    end
  end
end
