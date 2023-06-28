class ApplicationController < ActionController::API

    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    private

    def record_not_found_response
        # Handling record not found error
        render json: { error: "#{controller_name.classify} not found" }, status: :not_found
    end

    def unprocessable_entity_response(invalid)
        render json: { "errors": invalid.record.errors }, status: :unprocessable_entity
    end
end
