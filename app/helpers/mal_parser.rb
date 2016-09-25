class MalParser
  def initialize(url, *cats)
    @url = url
    @doc = Nokogiri::HTML(open(url), nil, 'utf-8')
    @episodes = Nokogiri::HTML(open(url + '/episode'), nil, 'UTF-8') rescue nil
    @categories = cats 
  end

  def get_main_data
    english_title = @doc.css("h1 span").children.text
    description = @doc.xpath("//span[@itemprop='description']").text
    season = @doc.xpath("//span[@class='information season']").text
    @ent = Entity.create({:name => english_title + " (#{season})", :description => description})
    @ent.entity_categories.create({:category_id => Category.find_by({:name => 'anime'}).id})
    @ent.general_links.create({:title => "MyAnimeList", :href => @url})
    @categories.each {|cat| @ent.categories << Category.find_or_create_by({name: cat}) }
  end

  def get_episode_data
    data = @episodes.css('.episode-list-data').map do |ep| 
      ep_num = ep.css('.episode-number').text
      ep_pg = Nokogiri::HTML(open(URI.escape(ep.css('a').attribute('href').value)))
      sleep(Random.rand(5))
      ep_desc = ep_pg.css('div.pt8.pb8').text.split("Synopsis")[1].strip
      if ep_num.size < 2
        ["0" + ep.css('.episode-number').text + " " + ep.css('.episode-title').text.strip, ep_desc]
      else
        [ep.css('.episode-number').text + " " + ep.css('.episode-title').text.strip, ep_desc]
      end 
    end
    s = @ent.sections.create({:name => "Episodes"})
    data.uniq.each do |ep|
     s.subsections.create({:name => ep[0], :description => ep[1]})
    end
  end

  def make_entity
    get_main_data
    get_episode_data
  end
end
