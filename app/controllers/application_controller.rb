class ApplicationController < ActionController::Base
  def after_sign_in_path_for(resource)
    home_platform_path
  end
end
