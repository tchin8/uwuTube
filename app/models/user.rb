# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :fname, :lname, :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    attr_reader :password

    after_initialize :ensure_session_token, :random_color

    has_many :videos,
        class_name: :Video,
        foreign_key: :user_id
    
    has_many :comments,
        class_name: :Comment,
        foreign_key: :user_id

    has_many :views,
        class_name: :View,
        foreign_key: :user_id
    
    has_many :likes,
        foreign_key: :liker_id,
        class_name: :Like,
        dependent: :destroy

    def random_color
        color = [
            '#c2185b', 
            '#02589c', 
            '#aa47bc',
            '#f6501e',
            '#0398a6',
            '#33691d',
            '#465965',
            '#ed417b',
            '#be350d',
            '#512ea7',
            '#0087d1',
            '#f06c00',
            '#00897a',
            '#679f39',
            '#7d58c2',
            '#798f9c',
            '#5d4037',
            ]
        self.color = color.sample
    end 
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return ['Email does not exist'] unless user
        user.is_password?(password) ? user : ['Password you have entered is incorrect']
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end


    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end

end
