// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Additional changes made on top of Microsoft's content are (c) theexternvoid user on GitHub.
// Licensed under the WTFPL.

function is_valid_data(str)
{
  return str !== null
	  && str !== undefined
	  && str !== "";
}

function get_cal_offset()
{
  return "<br/><br/>";
}

function get_template_A_base_str(user_info)
{
  let str = "";
  str += '<div style="font:11px Arial, Verdana, sans-serif;color:#333">';
  str += '<p>:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::</p>';
  str += '<p><strong><span style="font-size:12.25px">FORRESTER</span></strong><br/>';
  str += '<span style="font:10px Arial, Verdana, sans-serif;color: #3BB982;">BOLD AT WORK</span></p>';
  str += '<p><strong>' + user_info.name + '</strong><br/>';
  str += user_info.title + (is_valid_data(user_info.phone) ? ' | Office landline: ' + user_info.phone : '') + ' | <a href="' + user_info.email + '">' + user_info.email + '</a><br/>';
  str += (is_valid_data(user_info.blog_link) ? '<a href="' + user_info.blog_link + '">My blog</a> | ' : '') + (is_valid_data(user_info.linkedin_link) ? '<a href="' + user_info.linkedin_link + '">LinkedIn profile</a>' : '') + (is_valid_data(user_info.follow_research_link) ? ' | <a href="' + user_info.follow_research_link + '">Follow my latest research</a><br/>' : '');
  str += '<br/>';
  str += '<strong>Forrester Research, Inc.</strong><br/>';
  str += '60 Acorn Park Drive, Cambridge, MA 02140 United States<br/>';
  str += '<a href="http://www.forrester.com/">Forrester.com</a> | <a href="http://blogs.forrester.com/">Blogs</a> | <a href="http://forr.com/what-it-means">Podcasts</a> | <a href="http://twitter.com/forrester">Twitter</a> | <a href="http://linkedin.com/company/forrester-research">LinkedIn</a> | <a href="http://www.youtube.com/user/forresterresearch">YouTube</a><p>';

  return str;
}

function get_template_B_base_str(user_info)
{
  let str = "";
  str += user_info.name;

  return str;
}