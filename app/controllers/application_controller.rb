class ApplicationController < ActionController::API

  def render_success(response_payload)
    render status: :ok,
           json: {
               status: ResponseStatuses::SUCCESS
           }.merge(response_payload)
  end

  def render_failure(response_payload)
    render status: :conflict,
           json: {
               status: ResponseStatuses::FAILED
           }.merge(response_payload)
  end

  rescue_from StandardError do |exception|

    response_payload = {
        status: ResponseStatuses::INTERNAL_SERVER_ERROR,
    }.tap do |payload|
      if Rails.env.development? || Rails.env.test?
        payload[:error_type] = exception.class.name
        payload[:error_message] = exception.message
        payload[:stacktrace] = exception.backtrace
      end
    end

    render status: :internal_server_error,
           json: response_payload
  end

  rescue_from ResourceNotFoundError do |exception|
    render status: :not_found,
           json: {
               status: ResponseStatuses::RESOURCE_NOT_FOUND,
               reason: exception.message,
               resource_type: exception.resource_type,
               resource_identifier: exception.resource_identifier
           }
  end

  rescue_from ApiErrors::BadRequestError do |exception|
    render status: :bad_request,
           json: {
               status: ResponseStatuses::BAD_REQUEST,
               reason: exception.message
           }
  end

end
