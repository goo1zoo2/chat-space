class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates_presence_of :content, unless: :image?
  mount_uploader :image, ImageUploader
end
