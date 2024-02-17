// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Additional changes made on top of Microsoft's content are (c) theexternvoid user on GitHub.
// Licensed under the WTFPL.

function get_template_A_str(user_info)
{
  let str = "";
  if (is_valid_data(user_info.greeting))
  {
    str += user_info.greeting + "<br/>";
  }

  str += get_template_A_base_str(user_info);
  str += (has_quotes(user_info) ? '<p><span style="font-size:7.0pt;font-family:Arial,sans-serif">INSERT QUOTE HERE</span></p>' : '')

  return str;
}

function get_template_B_str(user_info)
{
  let str = "";
  if (is_valid_data(user_info.greeting))
  {
    str += user_info.greeting + "<br/>";
  }

  str += get_template_B_base_str(user_info);
  
  return str;
}

function has_quotes(user_info) {
  return user_info.group_1_quotes.split('\n').length > 0 || user_info.group_2_quotes.split('\n').length > 0;
}
