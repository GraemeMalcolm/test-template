module Jekyll
  class ContentNavigationGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Get README metadata for module title
      readme = site.pages.find { |p| p.name == 'README.md' }
      if readme && readme.data['title']
        site.config['module_title'] = readme.data['title']
      end

      # Sort content pages
      content_pages = []
      Dir.glob(File.join(site.source, 'content', '*.md')).sort.each do |file|
        basename = File.basename(file)
        next if basename.start_with?('_')
        
        # Find corresponding page
        page = site.pages.find { |p| p.path == "content/#{basename}" }
        content_pages << page if page
      end

      # Add navigation links
      content_pages.each_with_index do |page, index|
        page.data['previous_page'] = content_pages[index - 1].url if index > 0
        page.data['next_page'] = content_pages[index + 1].url if index < content_pages.length - 1
      end
    end
  end
end
