// courseFormat.js -- functions dealing w/course variables (found
//	in the courseInfo.js file in each directory) and semester
//	variables (found here, or in this directory)
//
// Kurt Schmidt
//
// 12/4/03
//
// REVISIONS
//	JAN 13 - added link to CS academic integrity policy.
//



//&&&&&&&&   Functions   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//////////////////////////////////////////////////////////////////////////
// setTitle - sets the title of the page
// depend:  gCourseNr, gCourseTitle, gTerm, gYear (local courseInfo.js)

function setTitle()
{
	document.title = gCourseNr + " -- " + gCourseTitle + 
			", " + gTerm + " " + gYear
}

//////////////////////////////////////////////////////////////////////////
// writeTitle - sets the title of the page
// depend:  gCourseNr, gCourseTitle, gTerm, gYear (local courseInfo.js)

function writeTitle()
{
	var title = "<title>" + gCourseNr + " -- " + gCourseTitle + 
			", " + gTerm + " " + gYear + "</title>"
	document.write( title )
}
//////////////////////////////////////////////////////////////////////////
// withdrawalDate - sets the title of the page
// depend:  gWithdrawalDeadline (courseInfo.js)

function withdrawalDate()
{
	document.writeln( gWithdrawalDeadline )
}

//////////////////////////////////////////////////////////////////////////
// syllabusTitle - sets the title of the syllabus
// depend:  gCourseNr, gTerm, gYear (local courseInfo.js)

function syllabusTitle()
{
	document.title = "Syllabus -- " + gCourseNr +  ", " + gTerm + " " + gYear
}

//////////////////////////////////////////////////////////////////////////
// courseTitle - Prints the course # and title
// depend:  gCourseNr, gCourseTitle (local courseInfo.js)

function courseTitle()
{
	document.write( gCourseNr )
	document.write( " -- " )
	document.write( gCourseTitle )
}

//////////////////////////////////////////////////////////////////////////
// term - prints the term (term year)
// depend:  gTerm, gYear (local courseInfo.js)

function term()
{
	document.write( gTerm )
	document.write( " " )
	document.write( gYear )
}

//////////////////////////////////////////////////////////////////////////
// header - just prints the top of the file (course, term, etc.)
// depend:  gCourseNr, gCourseTitle, gTerm, gYear (local courseInfo.js)

function header()
{
	with( document )
	{
		write( "<center><font size='+3'>" )
		write( gCourseNr )
		write( " - " )
		write( gCourseTitle )
		write( "</font>\n<br><font size='+1'>" )
		write( gTerm )
		write( " " )
		write( gYear )
		write( "</font></center>\n" )
	}
}

//////////////////////////////////////////////////////////////////////////
// pageLink - prints a link to this course's page
// depend:  gPage (local courseInfo.js)

function pageLink()
{
	with( document )
	{
		write( "<a target='" )
		write( gCourseNr )
		write( "' href='http://" )
		write( gPage )
		write( "'>" )
		write( gPage )
		write( "</a>" )
	}
}

//////////////////////////////////////////////////////////////////////////
// listReqdText - prints a table of the req'd text books
// depend:  gReqdText (local courseInfo.js)

function listReqdText()
{
	with( document )
	{
		write( "<table>\n<tr><th align='left'>Required</th></tr>" )
		if( gReqdTexts.length > 0 )
		{
			for( i=0; i < gReqdTexts.length; ++i )
			{
				write( "\t<tr><td>\n\t\t" )
				write( gReqdTexts[i] )
				write( "\n\t</td></tr>\n" )
			}	// for
		}	// if
		else
		{
			write( "<tr><td><i>none</i></td></tr>\n" )
		}
		write( "</table>\n" )
	}	// while
}

//////////////////////////////////////////////////////////////////////////
// listOptText - prints a table of the req'd text books
// depend:  gOptText (local courseInfo.js)

function listOptText()
{
	with( document )
	{
		write( "<table>\n<tr><th align='left'>Optional</th></tr>" )
		if( gOptTexts.length > 0 )
		{
			for( i=0; i < gOptTexts.length; ++i )
			{
				write( "\t<tr><td>\n\t\t" )
				write( gOptTexts[i] )
				write( "\n\t</td></tr>\n" )
			}	// for
		}	// if
		else
		{
			write( "<tr><td><i>none</i></td></tr>\n" )
		}
		write( "</table>\n" )
	}	// while
}

//////////////////////////////////////////////////////////////////////////
// listTas - prints a table of the TA(s)
// depend:  gTaList, gCourseNr (local courseInfo.js)

function listTas()
{
	with( document )
	{
		write( "<table>\n\t<tr>\n" )
		if( gTaList.length > 0 )
		{
			for( i=0; i < gTaList.length; ++i )
			{
				write( "\t\t<td><table>\n\t\t\t<tr><td align='center'>" )
				write( gTaList[i++] )
				write( "</td></tr>\n\t\t\t\t<tr><td align='center'>" )
				if( String(gTaList[i]) == "undefined" )
					write( "<i>See:</i>" )
				else {
					write( "<a href='mailto:" )
					write( gTaList[i] )
					write( "?subject=" )
					write( gCourseNr )
					write( " &lt;meaningful subject&gt;'>" )
					write( gTaList[i] )
					write( "</a>" )
				}
				write( "</td></tr>\n\t\t\t\t<tr><td align='center'>" )
				++i
				if( gTaList[i].length == 0 )
					write( "&nbsp;" )
				else
				{
					write( "<a target='ta' href='http://" )
					write( gTaList[i] )
					write( "'>" )
					write( gTaList[i] )
					write( "</a>" )
				}
				write( "</td></tr>\n\t\t\t</tr>\n\t\t</table></td>\n" )
			}	// for
		}	// if
		else
		{
			write( "\t<tr><td><i>none</i></td></tr>\n" )
		}
		write( "</table>\n" )
	}	// while
}


//////////////////////////////////////////////////////////////////////////////
// honestyStmt - prints out the entire section on cheating
// depend: none

function honestyStmt()
{
	var stmt = "<p> See the <a target='_blank' href=\n" +
	"'http://www.drexel.edu/provost/policies/academic_dishonesty.asp'>\n" +
	"Provost's policy </a>.  Any form of academic\n" +
	"dishonesty related to an assignment, by any party, will result in a\n" +
	"score of zero for the assignment for the first infraction.\n" +
	"Subsequent infractions will result in an F for the term. </p>\n" +

	"<p> Simply:  <b>Your work <i>must</i> be your own</b>, including\n" +
	"in-class work.  You may not \"write a program together\" unless\n" +
	"group work is specified.  You may not lend your work to others to\n" +
	"view, for any reason.  You may not reproduce any other person's\n" +
	"work.  This includes code obtained from the Web.  The two\n" +
	"exceptions are code that appears in the course text, and code\n" +
	"that I give you. </p>\n" +

	"<p> I also expect (and will check) that any directories on public\n" +
	"servers containing anything that looks like code from my\n" +
	"assignments be closed. </p>\n" +

	"<p> If you post code, in the context of a given assignment,\n" +
	"publicly, you will receive a zero for that assignment.</p>\n" +

	"<p> This serves as your warning.  I've been teaching since 1989,\n" +
	"and teaching programming since 1995.  I don't care to discuss\n" +
	"this topic further, other than to clarify questions you might\n" +
	"have. </p>\n"

	document.write( stmt )
}	// function honestyStmt

//////////////////////////////////////////////////////////////////////////////
// noteTakingStmt - prints no-laptop in class statement
// depend: none

function noteTakingStmt()
{
	var stmt = "<p> You are <strong>not permitted to use laptops</strong>\n" +
	"in class.\n" +
	"Likewise, I don't want to see you on your phone.  I can't plant\n" + 
	"a grad student in the back of the room with a paintball gun to\n" +
	"help students reading email, social media, or shopping focus. </p>\n\n" +

	"<p> Hand-written notes are better for long-term comprehension.\n" +
	"<a target='_blank' href='http://www.psychologicalscience.org/index.php/news/releases/take-notes-by-hand-for-better-long-term-comprehension.html'>\n" +
	"http://www.psychologicalscience.org/index.php/news/releases/take-notes-by-hand-for-better-long-term-comprehension.html</a> .</p>\n\n" +

	"<p> Using a tablet with a stylus is acceptable, up until you appear\n" +
	"to be doing something other than paying attention to lecture.  Yes,\n" +
	"they do look rather different. </p>\n\n" +

	"<p> If you have accomodations from ODR to use a laptop in class, then\n" +
	"sit in the front of the class. </p>\n\n"

	document.write( stmt )
}	// function honestyStmt



//////////////////////////////////////////////////////////////////////////
// submissionStmt - Writes out submission instructions
// depend:  gWebctLink	(

function submissionStmt()
{
	with( document )
	{
		write( "<h2>How to Submit</h2>" )

		write( gSubmissionText )
	}
}	// function submissionStmt()


//////////////////////////////////////////////////////////////////////////
// cms - list (and link to) the current course mgt. system
// depend:  None

function cms()
{
	var s
	with( document )
	{
		s = "<a target='blank'" +
			"href='http://learning.drexel.edu'>Blackboard Learn</a>"
		write( s )
	}
}

//////////////////////////////////////////////////////////////////////////
// printPath - appends argument to correct course directory
// depend:  gCourseNr

function printPath( suff )
{
	var path
	with( document )
	{
		path = gPage + "/" + suff
		write( path )
	}
}

