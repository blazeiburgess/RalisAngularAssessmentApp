class Link < ApplicationRecord
  belongs_to :subsection
  before_save :check_archive_link

  def check_archive_link
    unless !!self.archive
      self.archive = "https://archive.is/" + self.href
    end
  end

  def created_at
    super.strftime("%b %d, %Y, %l:%M%P")
  end
end
