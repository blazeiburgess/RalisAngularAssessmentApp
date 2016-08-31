class Link < ApplicationRecord
  belongs_to :subsection
  before_save :check_archive_link

  def check_archive_link
    unless !!self.archive
      self.archive = "https://archive.is/?url=" + self.href
    end
  end
end
