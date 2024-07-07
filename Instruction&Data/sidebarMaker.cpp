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
    link=x.substr(4,x.size()-5);
    topic=link;
    link="/Learning Topics/"+to_string(i)+'.'+" "+link+'.'+"html";
    cout<<"<a href=\"#\" onclick=\"loadHTMLContent(\'"<<link<<"\', \'content2\');  return false;\">"<<topic<<"</a>"<<endl;
    i++;
}
return 0;
}