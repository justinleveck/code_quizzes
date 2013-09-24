require './teenager_solution'

describe "#is_a_teenager?" do
  it "returns false if the person is younger than 12" do
    is_a_teenager?(12).should eq(false)
  end
end