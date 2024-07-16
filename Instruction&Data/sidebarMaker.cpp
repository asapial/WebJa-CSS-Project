#include <bits/stdc++.h>
using namespace std;
#define   Pi     2*acos(0.0)
#define   ll     long long
#define   pb     push_back
#define   mp     make_pair
#define   MAX    500006
#define   MAX1   10000008
#define   mem(a,v)   memset(a,v,sizeof(a))
#define   lcm(a, b)        ((a)*((b)/__gcd(a,b)))
void solve(){


}

int main(){

freopen("cssTopics.txt", "r", stdin);
freopen("sideBar.txt", "w", stdout);
string s[500];
for(auto &x:s)getline(cin,x);

int i=1;
for(auto x:s)
{   
    string link,topic;
    string len=to_string(i);
    int sizi=len.size();
    link=x.substr(sizi+3,x.size()-sizi-4);
    topic=link;
    link="https://asapial.github.io/WebJa/CSS/LearningTopics/"+to_string(i)+'.'+" "+link+'.'+"html";
    cout<<"<a href=\"#\" onclick=\"loadHTMLContent(\'"<<link<<"\', \'content2\');  return false;\">"<<topic<<"</a>"<<endl;
    i++;
}
return 0;
}

// loadHTMLContent(" https://asapial.github.io/WebJa/CSS/LearningTopics/1. align-content.html", "content2");