class ResourceNotFoundError < Error
  attr_reader :resource_type, :resource_identifier

  def initialize(resource_type, resource_identifier)
    @resource_type = resource_type
    @resource_identifier = resource_identifier

    super("Couldn't find resource of type #{resource_type}. Identifier: #{resource_identifier}")
  end
end