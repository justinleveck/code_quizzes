class Integer

  def is_between? min, max
    self > min && self < max ? true : false
  end

end